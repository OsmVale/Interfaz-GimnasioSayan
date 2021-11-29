import { DocenteCursoService } from '../services/progresos.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarDocenteCursoDataSource, DocenteCurso } from './mostrar-progresos-datasource';

@Component({
  selector: 'app-mostrar-progresos',
  templateUrl: './mostrar-progresos.component.html',
  styleUrls: ['./mostrar-progresos.component.css']
})
export class MostrarProgresosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DocenteCurso>;
  dataSource!: MostrarDocenteCursoDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'peso_inicial', 'peso_meta', 'tallas_iniciales', 'tallas_metas','Acciones'];


  constructor(private docenteCursoService : DocenteCursoService, private router:Router) {

  }

  ngOnInit(): void {
    this.listarDocenteCursos();
  }

  listarDocenteCursos(){
    this.dataSource = new MostrarDocenteCursoDataSource();
    this.docenteCursoService.getDocenteCursos().subscribe(
      res=>{
        this.dataSource.data = res;
      }
    )
  }

  eliminarDocenteCurso(id:string){
    this.docenteCursoService.deleteDocenteCursos(id);
    this.listarDocenteCursos();
    setTimeout(location.reload.bind(location), 500);
  }

  modificarDocenteCurso(id:string){
    this.router.navigate(['/editar-progresos/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
