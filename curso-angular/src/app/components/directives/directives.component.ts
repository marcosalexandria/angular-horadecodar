import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size = "40px";
  font = "Arial";
  color = "red";

  classes = ["green-title", "small-title"];
}
