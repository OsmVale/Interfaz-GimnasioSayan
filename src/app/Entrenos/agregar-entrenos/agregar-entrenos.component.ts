import { EstudianteCursoService } from '../services/entrenos.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstudianteCurso } from '../mostrar-entrenos/mostrar-entrenos-datasource';

@Component({
  selector: 'app-agregar-entrenos',
  templateUrl: './agregar-entrenos.component.html',
  styleUrls: ['./agregar-entrenos.component.css']
})
export class AgregarEntrenosComponent {
  addressForm = this.fb.group({
    id: [''],
    id_entrenador: ['', Validators.required],
    id_rutinas: [''],
    id_personas: ['', Validators.required],

  });

  constructor(private fb: FormBuilder, private estudianteCursoService: EstudianteCursoService, private router:Router) {}

  onAgregar(){
    /*console.log(this.form)*/

    const estudiantecurso:EstudianteCurso ={
      id:this.addressForm.value.id,
      id_entrenador:this.addressForm.value.id_entrenador,
      id_rutinas:this.addressForm.value.id_rutinas,
      id_personas:this.addressForm.value.id_personas,

    }
    /*console.log(persona);*/

    this.estudianteCursoService.postEstudianteCursos(estudiantecurso);
    this.router.navigate(['/estudiante-curso']);
    setTimeout(location.reload.bind(location), 500);

  }
}
