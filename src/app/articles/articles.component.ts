import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles = [];
  articleimage=this._auth.mainlink+"/articles/get/images/"

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this._auth.getArticles().subscribe(
      (res) => {
        this.articles = res;
      },
      (err) => console.log(err)
    );
  }
  readmore(){}
}
