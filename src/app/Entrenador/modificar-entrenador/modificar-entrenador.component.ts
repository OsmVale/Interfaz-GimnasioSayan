import { DocentesService } from '../services/entrenador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from '../mostrar-entrenador/mostrar-entrenador-datasource';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-entrenador',
  templateUrl: './modificar-entrenador.component.html',
  styleUrls: ['./modificar-entrenador.component.css']
})
export class ModificarEntrenadorComponent implements OnInit  {

  docente:Docente ={
    id: '',
    id_persona: '',
    status: '',

  }

  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    status: ['']
  });

  constructor(private fb: FormBuilder,
              private router:Router,
              private docentesService:DocentesService,
              private activeRoute:ActivatedRoute) {}

  ngOnInit(): void{
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.docentesService.getIdDocentes(id_entrada).subscribe(
        (res:any) =>{
          this.docente=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }

  }
  onActualizar(){
    this.docentesService.putDocentes(this.docente.id, this.docente);
    this.router.navigate(['/maestros'])

  }
}
