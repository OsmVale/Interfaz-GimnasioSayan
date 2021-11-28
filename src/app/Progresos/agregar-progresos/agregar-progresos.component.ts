import { Router } from '@angular/router';
import { DocenteCursoService } from '../services/progresos.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DocenteCurso } from '../mostrar-progresos/mostrar-progresos-datasource';

@Component({
  selector: 'app-agregar-progresos',
  templateUrl: './agregar-progresos.component.html',
  styleUrls: ['./agregar-progresos.component.css']
})
export class AgregarProgresosComponent {
  addressForm = this.fb.group({
    id: [''],
    id_personas: ['', Validators.required],
    peso_inicial: [''],
    peso_meta: ['', Validators.required],
    talla_inicial: [''],
    talla_meta: ['', Validators.required],

  });


  constructor(private fb: FormBuilder, private docenteCursoService: DocenteCursoService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const docenteCurso:DocenteCurso ={
      id:this.addressForm.value.id,
      id_personas:this.addressForm.value.id_personas,
      peso_inicial:this.addressForm.value.peso_inicial,
      peso_meta:this.addressForm.value.peso_meta,
      talla_inicial:this.addressForm.value.talla_inicial,
      talla_meta:this.addressForm.value.talla_meta,

    }
    /*console.log(persona);*/

    this.docenteCursoService.postDocenteCursos(docenteCurso);
    this.router.navigate(['/docente-curso']);
    setTimeout(location.reload.bind(location), 500);

  }
}
