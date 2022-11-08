import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0
  constructor() { }

  ngOnInit() {
  }

  operar(event: Event){

    let operacion = (<HTMLInputElement>event.target).value

    switch (operacion) {
      case "+":
        this.resultado = this.numero1 + this.numero2
        break;
      case "-":
        this.resultado = this.numero1 - this.numero2
        break;
      case "*":
        this.resultado = this.numero1 * this.numero2
        break;
      case "/":
        this.resultado = this.numero1 / this.numero2
        break;
    
      default:
        break;
    }

  }

}
