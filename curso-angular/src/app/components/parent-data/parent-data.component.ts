import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
  @Input() nome: string = "";
  @Input() dadosUsuario!: {email: string, cargo: string}; //outra maneira de iniciar uma variavel com TS é o !
}
