import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Area} from "../../../interfaces/area";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {BackendService} from "../../../services/backend.service";
import {Cultura} from "../../../interfaces/cultura";

@Component({
  selector: 'app-culturas-consulta',
  templateUrl: './culturas-consulta.component.html',
  styleUrls: ['./culturas-consulta.component.scss']
})
export class CulturasConsultaComponent implements OnInit, AfterViewInit {
  loading: boolean = true;

  listCulturas: Cultura[] = [];

  displayedColumns = ['nome_cultura', 'acoes'];
  culturasDataSource = new MatTableDataSource<Cultura>();

  // Paginador do Material Table
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25];

  // Ordenador do Material Table
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getCulturas().subscribe((listCulturas: Cultura[]) => {
      this.listCulturas = listCulturas;

      this.culturasDataSource.data = this.listCulturas;

      this.loading = false;
    });
  }

  ngAfterViewInit() {
    this.culturasDataSource.paginator = this.paginator;
    this.culturasDataSource.sort = this.sort;
  }
}
