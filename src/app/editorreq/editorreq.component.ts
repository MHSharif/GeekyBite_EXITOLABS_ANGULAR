import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-editorreq',
  templateUrl: './editorreq.component.html',
  styleUrls: ['./editorreq.component.css']
})
export class EditorreqComponent implements OnInit {
  editor={topic:'',sub:''}

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }
  submit() {
    this._auth.submitEditor(this.editor).subscribe(
      (res) => {
        console.log(res)
        
      },
      (err) => console.log(err)
    );
  }
}
