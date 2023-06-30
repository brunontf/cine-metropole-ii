import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FilmeDataService } from 'app/services/filme-data.service';


@Component({
  selector: 'app-form-add-filme',
  templateUrl: './form-add-filme.component.html',
  styleUrls: ['./form-add-filme.component.css']
})
export class FormAddFilmeComponent {

  constructor(private filmeData:FilmeDataService){}
  listaFilmes = this.filmeData.listaFilmes;

  addFilme(form:NgForm){
    let idNumber = this.listaFilmes.length + 1;
    let filme = {
      titulo : form.value.titulo,
      sinopse : form.value.sinopse,
      imagem : form.value.imagem,
      id: idNumber.toString(),
      favorito: "blank",
      comentario: ""
    }
    this.listaFilmes.push(filme);
    console.log(form.value)
    console.log(this.listaFilmes)
  }
  
}
