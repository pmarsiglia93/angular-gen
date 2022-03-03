import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  /*Novo: Http Headers */
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Metodo pega todos os temas, não recebe parametros mas tem um observable
  getAllTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://pmarsiglia93-projetoblog.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://pmarsiglia93-projetoblog.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://pmarsiglia93-projetoblog.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://pmarsiglia93-projetoblog.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://pmarsiglia93-projetoblog.herokuapp.com/tema/${id}`, this.token)
  }
}
