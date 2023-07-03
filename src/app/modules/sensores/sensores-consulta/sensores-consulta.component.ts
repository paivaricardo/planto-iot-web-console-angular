import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class SensoresConsultaComponent implements OnInit, AfterViewInit {
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25];

  // Ordenador do Material Table
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService
      .getSensores()
      .subscribe((listSensores: SensorAtuador[]) => {
        this.listSensores = listSensores;

        this.sensoresDataSource.data = this.listSensores;

        this.loading = false;
      });
  }

  ngAfterViewInit() {
    this.sensoresDataSource.paginator = this.paginator;
    this.sensoresDataSource.sort = this.sort;
  }
}
