import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nomeUsuario: string = "Joaquin";

  dadosUsuraio = {
    email: "joca@gmail.com",
    cargo: "adm"
  }
  title = 'curso-angular';
}
