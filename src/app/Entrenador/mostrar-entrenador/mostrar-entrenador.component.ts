import { Router } from '@angular/router';
import { DocentesService } from '../services/entrenador.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarDocentesDataSource, Docente } from './mostrar-entrenador-datasource';

@Component({
  selector: 'app-mostrar-entrenador',
  templateUrl: './mostrar-entrenador.component.html',
  styleUrls: ['./mostrar-entrenador.component.css']
})
export class MostrarEntrenadorComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Docente>;
  dataSource!: MostrarDocentesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'id_persona', 'status','Acciones'];

  constructor(private docentesService:DocentesService, private router:Router) {
    this.listarDocentes();
  }

  ngOnInit(): void {
    this.listarDocentes();
  }

  listarDocentes(){
    this.dataSource = new MostrarDocentesDataSource();
    this.docentesService.getDocentes().subscribe(
      res=> this.dataSource.data = res,
      err => console.log(err)
    );
  }

  eliminarDocentes(id:string){
    this.docentesService.deleteDocentes(id);
    this.listarDocentes();
    setTimeout(location.reload.bind(location), 500);
  }


  modificarDocentes(id:string){
    this.router.navigate(['/editar-entrenador/'+id]);
    }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
