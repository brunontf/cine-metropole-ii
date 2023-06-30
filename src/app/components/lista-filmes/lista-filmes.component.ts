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
  // like : string = "bi bi-hand-thumbs-up";
  // unlike : string = "bi bi-hand-thumbs-down";

  liker(gostei:HTMLElement,naoGostei:HTMLElement, gost:HTMLAnchorElement){
    if(gostei.className == "bi bi-hand-thumbs-up"){
      gostei.className = "bi bi-hand-thumbs-up-fill";
    } else {
      gostei.className = "bi bi-hand-thumbs-up";
    }
    if(naoGostei.className == "bi bi-hand-thumbs-down-fill"){
      naoGostei.className = "bi bi-hand-thumbs-down";
    }
    // console.log(gost.);
  }

  unliker(naoGostei:HTMLElement,gostei:HTMLElement){
    if(naoGostei.className == "bi bi-hand-thumbs-down"){
      naoGostei.className = "bi bi-hand-thumbs-down-fill";
    } else {
      naoGostei.className = "bi bi-hand-thumbs-down";
    }
    if(gostei.className == "bi bi-hand-thumbs-up-fill"){
      gostei.className = "bi bi-hand-thumbs-up";
    }
  }

  
  removerFilme(id:string){
    this.listaFilmes  = this.listaFilmes.filter(item => item.id !== id);
    this.listaFilmes.forEach((item,i) => item.id = (i+1).toString());
    console.log(this.listaFilmes);
  }
}
