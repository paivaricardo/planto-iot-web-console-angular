import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-consulta',
  templateUrl: './usuarios-consulta.component.html',
  styleUrls: ['./usuarios-consulta.component.scss']
})
export class UsuariosConsultaComponent implements OnInit {
  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
