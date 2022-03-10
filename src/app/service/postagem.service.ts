import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Get
  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://pmarsiglia93-projetoblog.herokuapp.com/postagens', this.token)
  }

  //Post
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://pmarsiglia93-projetoblog.herokuapp.com/postagens/post', postagem, this.token)
  }
}
