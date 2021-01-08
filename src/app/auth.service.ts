import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public mainlink = 'https://580b0043a42c.ngrok.io';

  private _registerUrl = this.mainlink + '/users/google/login';
  private _loginUrl = this.mainlink + '/users/google/login';
  private _writeUrl = '';
  private ulink = this.mainlink + '/users/upload';

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('accessToken');

    this._router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  loggedIn() {
    return !!localStorage.getItem('accessToken');
  }
  googletest() {
    var gtestl = this.mainlink + '/users/test/google';
    return this.http.get<any>(gtestl);
  }
  getUserDetails(userid) {
    const getuserdetails = this.mainlink + '/users/' + userid;
    return this.http.get<any>(getuserdetails);
  }
  editprofile(user) {
    const _editprofileL = this.mainlink + '/users/edit/details';
    return this.http.post<any>(_editprofileL, user);
  }
  upload(fd) {
    return this.http.post<any>(this.ulink, fd);
  }
  uploadArticle(fd) {
    const ulinkA = this.mainlink + '/articles/test/upload/images';
    return this.http.post<any>(ulinkA, fd);
  }

  writeArticle(data) {
    const writeLink = this.mainlink + '/articles/new';
    return this.http.post<any>(writeLink, data);
  }
  submitAuthor(data) {
    const authorLink = this.mainlink + '/authors/new';
    return this.http.post<any>(authorLink, data);
  }
  submitEditor(data) {
    const editorLink = this.mainlink + '/editors/new';
    return this.http.post<any>(editorLink, data);
  }
  getArticles(){
    const aLink=this.mainlink+"/articles";
    return this.http.get<any>(aLink);

  }
  getArticle(data){
    const arLink=this.mainlink+"/articles/"+data;
    return this.http.get<any>(arLink);
  }
  likeArticle(data){
    const likeLink=this.mainlink+"/articles/like ";
    return this.http.post<any>(likeLink, data);

  }
  search(data){
    const sLink=this.mainlink+'/'+data;
    return this.http.get<any>(sLink);

  }
}
