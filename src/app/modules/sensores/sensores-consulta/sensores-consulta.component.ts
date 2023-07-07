import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { SensorAtuador } from '../../../interfaces/sensor-atuador';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SensorAtuadorQueryModel } from '../../../interfaces/sensor-atuador-query-model';

@Component({
  selector: 'app-sensores-consulta',
  templateUrl: './sensores-consulta.component.html',
  styleUrls: ['./sensores-consulta.component.scss'],
})
export class SensoresConsultaComponent implements OnInit {
  loading: boolean = true;

  listSensores: SensorAtuadorQueryModel[] = [];

  displayedColumns = [
    'uuid_sensor',
    'nome_sensor',
    'latitude',
    'longitude',
    'data_cadastro_sensor',
    'data_precadastro_sensor',
    'observacoes',
    'usuario_cadastrante',
    'area',
    'cultura',
    'tipo_sensor',
  ];
  sensoresDataSource = new MatTableDataSource<SensorAtuadorQueryModel>();

  // Paginador do Material Table
  paginator?: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25];

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    if (mp) {
      this.paginator = mp;
      this.sensoresDataSource.paginator = this.paginator;
      this.changeDetectorRef.detectChanges();
    }
  }

  sort?: MatSort;

  // Ordenador do Material Table
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    if (ms) {
      this.sort = ms;
      this.sensoresDataSource.sort = this.sort;
      this.changeDetectorRef.detectChanges();
    }
  }

  constructor(
    private backendService: BackendService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.backendService
      .getSensores()
      .subscribe((listSensores: SensorAtuador[]) => {
        this.listSensores = listSensores;

        this.sensoresDataSource.data = this.listSensores;

        this.sensoresDataSource.paginator = this.paginator!;
        this.sensoresDataSource.sort = this.sort!;

        this.loading = false;
      });
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.sensoresDataSource.filter = filterValue.trim().toLowerCase();
  }
}
