import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
})
export class EditprofileComponent implements OnInit {
  foods: Food[] = [
    { value: 'Author-0', viewValue: 'Author' },
    { value: 'Editor-1', viewValue: 'Editor' },
  ];
  proid;
  profiledata;
  selectedFile: File;
  profilepicturename: any;
  avatarlink;

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.proid = localStorage.getItem('CurrentUserID');
    this.avatarlink=this._auth.mainlink+"/users/"+this.proid+"/avatar/profile"
    this._auth.getUserDetails(this.proid).subscribe(
      (res) => {
        this.profiledata = res;
        console.log(this.profiledata);
      },
      (err) => console.log(err)
    );
  }

  onFileChange(event: any) {
    this.selectedFile = <File>event.target.files[0];

    this.onUpload();
  }
  openFileBrowser(event: any) {
    let element: HTMLElement = document.getElementById(
      'profilepicture'
    ) as HTMLElement;
    element.click();
  }
  onUpload() {
    let id = this.route.snapshot.paramMap.get('uid');
    const fd = new FormData();
    fd.append('image', this.selectedFile,this.selectedFile.name);
    console.log(fd);
    this._auth.upload(fd).subscribe(
      (res) => {
        console.log(res);
        console.log(fd);
        console.log(fd);
      },
      (err) => console.log(err)
    );
  }

  updateInfo() {
    this._auth.editprofile(this.profiledata).subscribe(
      (res) => {
        this._router.navigate(['/profile/' + this.proid]);
      },
      (err) => console.log(err)
    );
  }
}
