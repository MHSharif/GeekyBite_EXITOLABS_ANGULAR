import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-writearticle',
  templateUrl: './writearticle.component.html',
  styleUrls: ['./writearticle.component.css'],
})
export class WritearticleComponent implements OnInit {
  submitarticle = {
    title: '',
    body: '',
    topic: '',
    subtopic: '',
    page: null,
    images: [],
    keys: '',
    slug:'',
  };
  selectedFile;
  imagesT = [];
  test = new FormData();
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),

    file: new FormControl('', [Validators.required]),

    fileSource: new FormControl('', [Validators.required]),
  });

  constructor(private _auth: AuthService) {}
  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {}

  articleSubmit() {
    console.log(this.submitarticle);
    this._auth.writeArticle(this.submitarticle).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        this.selectedFile = <File>event.target.files[i];

        this.test.append('images', this.selectedFile, this.selectedFile.name);

        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.imagesT.push(event.target.result);
          this.myForm.patchValue({
            fileSource: this.imagesT,
          });
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
    this.onUpload();
  }
  openFileBrowser(event: any) {
    let element: HTMLElement = document.getElementById('file') as HTMLElement;
    element.click();
  }
  onUpload() {
    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log(this.test);
    this._auth.uploadArticle(this.test).subscribe(
      (res) => {
        console.log(res);
        this.submitarticle.images = res;
      },
      (err) => console.log(err)
    );
  }
}
