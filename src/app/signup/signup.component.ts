import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('signUpRef', { static: true }) loginElement: ElementRef;
  auth2: any;
  t;userL;
  registerUserData = { email: null, first: null, last: null };
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {
    this.googleInitialize();
  }
  // -----------------------------------------------Google---------------------------------------------------------

  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id:
            '631867203803-gfnbuj33563dmuorhmfm6cv2prqasulq.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email',
        });
        this.prepareLogin();
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'google-jssdk');
  }

  prepareLogin() {
    this.auth2.attachClickHandler(
      this.loginElement.nativeElement,
      {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        localStorage.setItem(
          'accessToken',
          googleUser.getAuthResponse().id_token
        );
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        this.registerUserData.email = profile.getEmail();
        this.registerUserData.first = profile.getName();
        console.log(this.registerUserData);
        if(this.registerUserData.email !== null){this.registerUser();}
      },
      (error) => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );

    console.log(this.registerUserData);
  }
  // -----------------------------------------------Google ends---------------------------------------------------------
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res) => {
        localStorage.setItem('accessToken', res.accessToken)
        // ---------------------------------------------------------------Token Decoder----------------------------------------------------------------------------

        function urlBase64Decode(str) {
          var output = str.replace('-', '+').replace('_', '/');
          switch (output.length % 4) {
            case 0:
              break;
            case 2:
              output += '==';
              break;
            case 3:
              output += '=';
              break;
            default:
              throw 'Illegal base64url string!';
          }
          return window.atob(output);
        }

        var token = localStorage.getItem('accessToken');
        if (typeof token !== 'undefined') {
          var encoded = token.split('.')[1];
          this.userL = JSON.parse(urlBase64Decode(encoded));
          localStorage.setItem('CurrentUserID', this.userL.username);
      
        }
        console.log(this.userL);
        // ---------------------------------------------------------------Token Decoder ends----------------------------------------------------------------------------
        this._router.navigate(['/home']);

        console.log(true);
        console.log(res);
      },
      (err) => console.log(err)
    );
    // window.location.reload();
  }
}
