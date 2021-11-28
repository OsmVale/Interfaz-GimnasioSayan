import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MostrarTablaRutinasDataSource, MostrarTablaRutinasItem } from './mostrar-tabla-rutinas-datasource';

@Component({
  selector: 'app-mostrar-tabla-rutinas',
  templateUrl: './mostrar-tabla-rutinas.component.html',
  styleUrls: ['./mostrar-tabla-rutinas.component.css']
})
export class MostrarTablaRutinasComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MostrarTablaRutinasItem>;
  dataSource: MostrarTablaRutinasDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new MostrarTablaRutinasDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
