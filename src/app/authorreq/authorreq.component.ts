import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authorreq',
  templateUrl: './authorreq.component.html',
  styleUrls: ['./authorreq.component.css']
})
export class AuthorreqComponent implements OnInit {

  author={topic:'',sub:''}
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }
  submit() {
    this._auth.submitAuthor(this.author).subscribe(
      (res) => {
        console.log(res)
        
      },
      (err) => console.log(err)
    );
  }

}
