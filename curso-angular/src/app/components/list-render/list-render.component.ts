import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Animal } from '../../interfaces/Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  constructor(private listService: ListService){}

  animais: Animal[] = [
    {nome: "Turca", tipo: "Cachorro", idade: 2},
    {nome: "Tom", tipo: "Gato", idade: 4},
    {nome: "Frida", tipo: "Cachorro", idade: 5},
    {nome: "Bob", tipo: "Cavalo", idade: 1}
  ];

  animalDetalhe!: string;

  mostraIdade(animal: Animal): void{
    this.animalDetalhe = `O ${animal.tipo} ${animal.nome} tem ${animal.idade} ano(s)`
  }

  removeAnimal(animal: Animal): void{
    console.log("removendo animal")
    this.animais = this.listService.remove(this.animais, animal);
  }
}
