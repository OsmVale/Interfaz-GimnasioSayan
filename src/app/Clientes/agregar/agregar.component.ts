import { Router } from '@angular/router';
import { EstudiantesService } from '../services/clientes.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Estudiante } from '../mostrar/mostrar-datasource';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    id_rutina: ['', Validators.required],
    id_entrenos: ['', Validators.required],
    id_dieta: ['',Validators.required],
    status: ['',Validators.required]
  });



  constructor(private fb: FormBuilder, private estudiantesService:EstudiantesService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const estudiante:Estudiante ={

      id:this.form.value.id,
      id_persona:this.form.value.id_persona,
      id_rutina:this.form.value.id_rutina,
      id_entrenos:this.form.value.id_entrenos,
      id_dieta: this.form.value.id_dieta,
      status:this.form.value.status
    }
    /*console.log(clientes);*/

    this.estudiantesService.postEstudiantes(estudiante);
    this.router.navigate(['/clientes']);
    setTimeout(location.reload.bind(location), 500);

  }
}
