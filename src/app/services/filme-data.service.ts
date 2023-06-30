import { Injectable, OnInit } from '@angular/core';
import FilmesJson from 'assets/filmes.json';

interface FILME{
  id:string,
  titulo:string,
  imagem:string,
  sinopse:string,
  favorito:string,
  comentario:string;
}

@Injectable({
  providedIn: 'root'
})
export class FilmeDataService {

  public listaFilmes: FILME[] = FilmesJson;
  
  constructor() { }
  
}
