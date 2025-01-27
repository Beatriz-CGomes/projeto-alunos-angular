import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cursos } from '../core/types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  listarCurso() : Observable<Cursos[]>{
        return this.http.get<Cursos[]>(`${this.apiUrl}/cursos`)
  }
}
