import { EstudianteCursoService } from '../services/entrenos.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarEstudianteCursoDataSource, EstudianteCurso } from './mostrar-entrenos-datasource';

@Component({
  selector: 'app-mostrar-entrenos',
  templateUrl: './mostrar-entrenos.component.html',
  styleUrls: ['./mostrar-entrenos.component.css']
})
export class MostrarEntrenosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EstudianteCurso>;
  dataSource!: MostrarEstudianteCursoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_entrenador', 'id_rutinas', 'id_personas', 'Acciones'];


  constructor(private estudianteCursoService : EstudianteCursoService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarEstudianteCursos();
  }

  listarEstudianteCursos(){
    this.dataSource = new MostrarEstudianteCursoDataSource();
    this.estudianteCursoService.getEstudianteCursos().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarEstudianteCurso(id:string){
    this.estudianteCursoService.deleteEstudianteCursos(id);
    this.listarEstudianteCursos();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarEstudianteCurso(id:string){
    this.router.navigate(['/editar-estudiante-curso/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
