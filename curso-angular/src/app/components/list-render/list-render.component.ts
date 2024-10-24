import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animais = [
    {nome: "Turca", tipo: "Cachorro"},
    {nome: "Tom", tipo: "Gato"},
    {nome: "Frida", tipo: "Cachorro"},
    {nome: "Bob", tipo: "Cavalo"}
  ];
}
