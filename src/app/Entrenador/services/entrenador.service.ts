import { Docente } from '../mostrar-entrenador/mostrar-entrenador-datasource';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocentesService {

  /* URL = 'http://localhost:3000/entrenador';*/
   URL = 'https://localhost:3000/entrenador';

  constructor(private http : HttpClient)  { }

  getDocentes(): Observable<Docente[]>{
    return this.http.get<Docente[]>(this.URL);
  }

  getIdDocentes(id:string): Observable<Docente[]>{
    return this.http.get<Docente[]>(this.URL+'/'+id);
  }

  postDocentes(docente:Docente)
  {
    return this.http.post(this.URL,docente).subscribe(
      res => console.log(res)
    )
  }

  putDocentes(id:string, docente:Docente){
    return this.http.put(this.URL+'/'+id, docente).subscribe(
      res => console.log(res)
    )
  }

  deleteDocentes(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

}
