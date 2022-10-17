import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {  
 nome = "Miromar Francisco de Alcantara Junior"
 dataNasc = "1985-06-03"
 urlImagem = "/assets/f1.jpg"
 mostrarData(){
  return  alert(` A data de Nascimento do ${this.nome} é ${this.dataNasc}`)
 }
}
