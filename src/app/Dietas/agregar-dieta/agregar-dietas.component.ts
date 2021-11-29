import { CursosService } from '../services/dietas.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Curso } from '../mostar-dietas/mostar-dietas-datasource';

@Component({
  selector: 'app-dieta',
  templateUrl: './agregar-dietas.component.html',
  styleUrls: ['./agregar-dietas.component.css']
})
export class AgregarDietasComponent {
  addressForm = this.fb.group({
    id: [''],
    dietas: ['', Validators.required],
    listado_dietas: ['', Validators.required],
    fecha_inicio: ['', Validators.required],
    fecha_fin: ['', Validators.required],
    id_persona: ['', Validators.required]

  });


  constructor(private fb: FormBuilder, private cursosService: CursosService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const curso:Curso ={
      id:this.addressForm.value.id,
      dietas:this.addressForm.value.dietas,
      listado_dietas:this.addressForm.value.listado_dietas,
      fecha_inicio:this.addressForm.value.fecha_inicio,
      fecha_fin:this.addressForm.value.fecha_fin,
      id_persona:this.addressForm.value.id_persona,
    }
    /*console.log(persona);*/

    this.cursosService.postCursos(curso);
    this.router.navigate(['/dieta']);
    setTimeout(location.reload.bind(location), 500);

  }
}
