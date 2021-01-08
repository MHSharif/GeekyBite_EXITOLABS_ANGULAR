import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-viewarticle',
  templateUrl: './viewarticle.component.html',
  styleUrls: ['./viewarticle.component.css'],
})
export class ViewarticleComponent implements OnInit {
  articleID;
  currentuser=localStorage.getItem('CurrentUserID');
  Liked=false;
  Article;
  AuthorAvatar;
  articleimage = this._auth.mainlink + '/articles/get/images/';
  likee={article_id:''}

  constructor(private _auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.articleID = this.route.snapshot.paramMap.get('aid');
    this._auth.getArticle(this.articleID).subscribe(
      (res) => {
        this.Article = res;
        console.log(this.Article);
        this.likee.article_id=this.Article.article_id
        this.AuthorAvatar =
          this._auth.mainlink +
          '/users/' +
          this.Article.author +
          '/avatar/profile';
          for(var i=0;i<100;i++){if(this.Article.likes[i]===this.currentuser){this.Liked=true;}}
          
      },
      (err) => console.log(err)
    );
  }

  like() {
    console.log(this.Article.article_id)
    this._auth.likeArticle(this.likee).subscribe(
      (res) => {
        console.log(res);
        console.log(this.Article.article_id);
        this.Liked=true;
      },
      (err) => {
        return console.log(err);
      }
    );
  }
}
