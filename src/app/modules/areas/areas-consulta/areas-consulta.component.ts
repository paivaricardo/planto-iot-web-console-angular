import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BackendService } from '../../../services/backend.service';
import { Area } from '../../../interfaces/area';

@Component({
  selector: 'app-areas-consulta',
  templateUrl: './areas-consulta.component.html',
  styleUrls: ['./areas-consulta.component.scss'],
})
export class AreasConsultaComponent implements OnInit, AfterViewInit {
  loading: boolean = true;

  listAreas: Area[] = [];

  displayedColumns = ['nome_area', 'acoes'];
  areasDataSource = new MatTableDataSource<Area>();

  // Paginador do Material Table
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25];

  // Ordenador do Material Table
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getAreas().subscribe((listAreas: Area[]) => {
      this.listAreas = listAreas;

      this.areasDataSource.data = this.listAreas;

      this.loading = false;
    });
  }

  ngAfterViewInit() {
    this.areasDataSource.paginator = this.paginator;
    this.areasDataSource.sort = this.sort;
  }
}
