import { DocenteCursoService } from '../services/progresos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DocenteCurso } from '../mostrar-progresos/mostrar-progresos-datasource';

@Component({
  selector: 'app-modificar-progresos',
  templateUrl: './modificar-progresos.component.html',
  styleUrls: ['./modificar-progresos.component.css']
})
export class ModificarProgresosComponent {

  docenteCurso: DocenteCurso ={
    id: '',
    id_persona: '',
    peso_inicial: '',
    peso_meta: '',
    talla_inicial: '',
    talla_meta: '',
      }

  addressForm = this.fb.group({
    id: [''],
    id_personas: ['', Validators.required],
    peso_inicial: ['',Validators.required],
    peso_meta: ['', Validators.required],
    talla_inicial: ['',Validators.required],
    talla_meta: ['', Validators.required],

  });


  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private router:Router,
    private activeRoute:ActivatedRoute,
    private docenteCursoService:DocenteCursoService) {}

    ngOnInit(): void{
      const id_entrada = <string>this.activeRoute.snapshot.params.id;
      console.log('id de entrada: '+id_entrada);

      if(id_entrada){
        this.docenteCursoService.getIdDocenteCurso(id_entrada).subscribe(
          (res:any) =>{
            this.docenteCurso=res[0];
            console.log(res[0]);
          },
          err=>console.log(err)
        )
      }

    }
    onActualizar(){
      this.docenteCursoService.putDocenteCursos(this.docenteCurso.id, this.docenteCurso);
      this.router.navigate(['/progresos'])

    }
}
