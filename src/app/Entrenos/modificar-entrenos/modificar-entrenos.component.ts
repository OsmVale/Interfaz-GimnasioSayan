import { EstudianteCursoService } from '../services/entrenos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstudianteCurso } from '../mostrar-entrenos/mostrar-entrenos-datasource';

@Component({
  selector: 'app-modificar-entrenos',
  templateUrl: './modificar-entrenos.component.html',
  styleUrls: ['./modificar-entrenos.component.css']
})
export class ModificarEntrenosComponent {
  estudianteCurso: EstudianteCurso ={
    id: '',
    id_entrenador: '',
    id_rutinas: '',
    id_personas: '',

  }

  addressForm = this.fb.group({
    id: [''],
    id_entrenador: ['', Validators.required],
    id_rutinas: [''],
    id_personas: ['', Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private estudianteCursoService:EstudianteCursoService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.estudianteCursoService.getIdEstudianteCurso(id_entrada).subscribe(
          (res:any) =>{
            this.estudianteCurso=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.estudianteCursoService.putEstudianteCursos(this.estudianteCurso.id, this.estudianteCurso);
      this.router.navigate(['/estudiante-curso'])

    }
}
