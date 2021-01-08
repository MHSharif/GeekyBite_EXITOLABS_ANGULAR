import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css'],
})
export class ArticlelistComponent implements OnInit {
  articles = [];
  topic="";
  subtopic="";
  page="";
  author="";
  title="";
  articleimage = this._auth.mainlink + '/articles/get/images/';

  constructor(private _auth: AuthService, private route: ActivatedRoute,private _router: Router) {}

  ngOnInit(): void {
    var slink = this.route.snapshot.paramMap.get('sid');
    this._auth.search(slink).subscribe(
      (res) => {
        this.articles = res;
      },
      (err) => console.log(err)
    );
  }
  customsearch() {
    this._router.navigate(['/search/customsearch']);
    var Clink =
      'articles?search=' +
      this.title +
      '&&topic=' +
      this.topic +
      '&&subtopic=' +
      this.subtopic +
      '&&author=' +
      this.author +
      '&&page=' +
      this.page;
    this._auth.search(Clink).subscribe(
      (res) => {
        this.articles = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
