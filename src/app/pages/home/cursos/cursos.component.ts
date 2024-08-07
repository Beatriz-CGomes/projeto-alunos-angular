import { Component, OnInit } from '@angular/core';
import { Cursos } from 'src/app/core/types/types';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  curso!: Cursos[];

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    this.service.listarCurso().subscribe(
      res => {
        this.curso = res;
      })
  }
}
