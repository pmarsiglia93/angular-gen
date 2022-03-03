import { Tema } from './../model/Tema';
import { TemaService } from '../service/tema.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
    ) { }

  ngOnInit(){
    window.scroll(0,0);

    if(environment.token == ''){
      this.router.navigate(['/entrar']);
      alert('Tentando chegar aqui tem token meu bom?')
    }

    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  cadastrar(){
      this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
        this.tema = resp
        alert('Tema cadastrado com sucesso!')
        this.findAllTemas()
        this.tema = new Tema()
      })
    }

}
