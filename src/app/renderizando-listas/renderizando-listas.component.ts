import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {

  celulares : Celular[] =[
    {id : 1,nome : "XIAOMI" ,descricao : "NOTE 11", esgotado : false},
    {id : 2,nome : "SAMSUNG" ,descricao : "S21", esgotado : false},
    {id : 3,nome : "IPHONE" ,descricao : "XR", esgotado : true}
  
  ]

}
