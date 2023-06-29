import { Component, OnInit } from '@angular/core';
import { FilmeDataService } from 'app/services/filme-data.service';


@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent {

  constructor(private filmeData:FilmeDataService){}

  listaFilmes = this.filmeData.listaFilmes;
  
  removerFilme(id:string){
    this.listaFilmes  = this.listaFilmes.filter(item => { return item.id !== id});
    this.listaFilmes .forEach((item,i) => item.id = i.toString())
    console.log(this.listaFilmes);
  }
}
