import { Component, OnInit, Output, EventEmitter, Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  proid;
  profiledata;
  avatarlink;
  followers;
  followings;
  PDList;
  listname;
  listavatar;
  constructor(private _auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.proid = this.route.snapshot.paramMap.get('uid');
    this.avatarlink =
      this._auth.mainlink + '/users/' + this.proid + '/avatar/profile';
    this._auth.getUserDetails(this.proid).subscribe(
      (res) => {
        this.profiledata = res;
        this.followers = this.profiledata.followers;
        this.followings = this.profiledata.following;
        console.log(this.profiledata);
      },
      (err) => console.log(err)
    );
    this.onCreate.emit('dummy'); 
  }
 
}
