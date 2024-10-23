import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manda-numero',
  templateUrl: './manda-numero.component.html',
  styleUrl: './manda-numero.component.css'
})
export class MandaNumeroComponent {
@Output() mandarNumero: EventEmitter<any> = new EventEmitter(); // prepara um evento para ser enviado

  handleClick(): void{
    this.mandarNumero.emit(); //enviando o evento para o pai
  }
}
