import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor( 
    private servicoCurso: CursosService
  ){}

  ngOnInit(): void {
   this.servicoCurso.listarCurso().subscribe(
    resposta => {
      console.log(resposta);
    }
   )
  }

}
