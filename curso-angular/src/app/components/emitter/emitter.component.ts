import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  numero:number = 0;
  onMandarNumero():void {
    this.numero = this.numero + 1;
  }
}
