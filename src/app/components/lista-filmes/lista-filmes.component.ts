import { Component, OnInit } from '@angular/core';
import { FilmeDataService } from 'app/services/filme-data.service';

interface FILME {
  id: string,
  titulo: string,
  imagem: string,
  sinopse: string,
  favorito: string,
  comentario: string;
}

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})



export class ListaFilmesComponent implements OnInit {

  constructor(private filmeData:FilmeDataService){}

  ngOnInit(): void {    
    this.ordernarFilmes();
  }

  

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
    if(confirm("Tem certeza que deseja excluir este filme?")){
    this.listaFilmes  = this.listaFilmes.filter(item => item.id !== id);
    this.listaFilmes .forEach((item,i) => item.id = (i+1).toString())
    console.log(this.listaFilmes);
    }
  }


  compare(a: FILME, b: FILME) {
  if (a.favorito < b.favorito) {
    return -1;
  }
    if (a.favorito > b.favorito) {
    return 1;
  }
  return 0;  
}


  ordernarFilmes(){
    this.listaFilmes.sort((a, b) => this.compare(a, b));    
  }
  
  comentarFilme(id:string, comentario:any){
    this.listaFilmes.forEach((item) => { if (item.id == id){
      item.comentario = comentario.value;
    }})

  }




}
