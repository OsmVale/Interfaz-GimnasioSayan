import { Router } from '@angular/router';
import { DocentesService } from '../services/entrenador.service';
import { Docente } from '../mostrar-entrenador/mostrar-entrenador-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-entrenador',
  templateUrl: './agregar-entrenador.component.html',
  styleUrls: ['./agregar-entrenador.component.css']
})
export class AgregarEntrenadorComponent {
  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    status: ['', Validators.required],

  });

  constructor(private fb: FormBuilder, private docentesService:DocentesService, private router:Router) {}

  onAgregar(){
    console.log(this.form)

    const docente:Docente ={
      id:this.form.value.id,
      id_persona:this.form.value.id_persona,
      status:this.form.value.status,

    }
    console.log(docente);

    this.docentesService.postDocentes(docente);
    this.router.navigate(['/maestros']);
    setTimeout(location.reload.bind(location), 500);

  }
}
