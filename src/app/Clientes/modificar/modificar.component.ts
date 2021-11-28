import { EstudiantesService } from '../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Estudiante } from '../mostrar/mostrar-datasource';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  estudiante: Estudiante ={
    id: '',
    id_persona: '',
    id_rutina: '',
    id_entrenos: '',
    id_dieta: '',
    status: ''
  }

  form = this.fb.group({
    id: [''],
    id_persona: ['', Validators.required],
    id_rutina: ['', Validators.required],
    id_entrenos: ['', Validators.required],
    id_dieta: [''],
    status: ['']
  });

  constructor(private fb: FormBuilder, private router:Router,
              private estudianteService: EstudiantesService,
              private activeRoute:ActivatedRoute) {}

  ngOnInit(): void{
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada: '+id_entrada);

    if(id_entrada){
      this.estudianteService.getIdEstudiantes(id_entrada).subscribe(
        (res:any) =>{
          this.estudiante=res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      )
    }

  }
  onActualizar(){
    this.estudianteService.putEstudiantes(this.estudiante.id, this.estudiante);
    this.router.navigate(['/clientes']);

  }
}
