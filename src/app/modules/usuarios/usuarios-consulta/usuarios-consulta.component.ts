import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BackendService } from '../../../services/backend.service';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-usuarios-consulta',
  templateUrl: './usuarios-consulta.component.html',
  styleUrls: ['./usuarios-consulta.component.scss'],
})
export class UsuariosConsultaComponent implements OnInit, AfterViewInit {
  loading: boolean = true;

  listUsuarios: Usuario[] = [];

  displayedColumns = [
    'nome_usuario',
    'email_usuario',
    'data_cadastro',
    'id_perfil_usuario',
  ];
  usuariosDataSource = new MatTableDataSource<Usuario>();

  // Paginador do Material Table
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25];

  // Ordenador do Material Table
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getUsuarios().subscribe((listUsuarios: Usuario[]) => {
      this.listUsuarios = listUsuarios;

      this.usuariosDataSource.data = this.listUsuarios;

      this.loading = false;
    });
  }

  ngAfterViewInit() {
    this.usuariosDataSource.paginator = this.paginator;
    this.usuariosDataSource.sort = this.sort;
  }
}
