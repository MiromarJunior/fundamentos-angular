import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent  {

  sobrenome = "Francisco de Alcântara";

  mostraNomeCompleto(nomeCompleto : any){
    alert(`O nome completo é : ${nomeCompleto}`)
  }

}
