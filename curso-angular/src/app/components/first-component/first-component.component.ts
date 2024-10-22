import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  nome: string = "Marcos";
  idade: number = 27;
  passaTempo = ["Ler", "Estudar"];
  carro = {
    modelo: "Polo",
    ano: 2020
  }

  constructor(){}

  ngOnInit(): void{}
}
