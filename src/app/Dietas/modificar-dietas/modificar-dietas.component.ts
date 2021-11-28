import { CursosService } from '../services/dietas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from '../mostar-dietas/mostar-dietas-datasource';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-dietas',
  templateUrl: './modificar-dietas.component.html',
  styleUrls: ['./modificar-dietas.component.css']
})
export class ModificarDietasComponent {

  curso: Curso ={
    id: '',
    dietas: '',
    listado_dietas: '',
    fecha_inicio:'',
    fecha_fin:'',
    id_persona:''
  }

  addressForm = this.fb.group({
    id: [''],
    dietas: ['', Validators.required],
    listado_dietas: ['', Validators.required],
    fecha_inicio:[''],
    fecha_fin:[''],
    id_persona:[''],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private cursosService:CursosService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.cursosService.getIdCurso(id_entrada).subscribe(
          (res:any) =>{
            this.curso=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.cursosService.putCursos(this.curso.id, this.curso);
      this.router.navigate(['/Dietas'])

    }
}
