import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Curso } from '../mostar-dietas/mostar-dietas-datasource';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  /*URL = 'http://localhost:3000/dietas';*/
  URL = 'https://localhost/dietas';
  constructor(private http : HttpClient)  { }

  getCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.URL);
  }

  getIdCurso(id:string): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.URL+'/'+id);
  }

  postCursos(curso:Curso)
  {
    return this.http.post(this.URL, curso).subscribe(
      res => console.log(res)
    )
  }

  deleteCursos(id:string){
    this.http.delete(this.URL+'/'+id).subscribe(
      res => console.log(res)
    )
  }

  putCursos(id:string, curso:Curso){
    return this.http.put(this.URL+'/'+id, curso).subscribe(
      res => console.log(res)
    )
  }

}




