import { Component, Input } from '@angular/core';
import { Cursos } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.css']
})
export class CardCursoComponent {
@Input() curso!: Cursos;
}
