import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { Usuario } from '../model/Usuario';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http:HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
  return this.http.post<UserLogin>('https://pmarsiglia93-projetoblog.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario:Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('https://pmarsiglia93-projetoblog.herokuapp.com/usuarios/cadastrar', usuario)

  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://pmarsiglia93-projetoblog.herokuapp.com/usuarios/${id}`)
  }

logado(){
  let ok: boolean = false

  if(environment.token != ''){
  ok = true
  }
    return ok
  }

  }


  //Precisa ter o token Headears tem que fazer o Put do usuário.
  //Trocar do metodo Post para o Put.
