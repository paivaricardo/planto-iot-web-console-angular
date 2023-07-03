import { Component, OnInit } from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BackendService} from "../../../services/backend.service";
import {Area} from "../../../interfaces/area";

@Component({
  selector: 'app-areas-edicao',
  templateUrl: './areas-edicao.component.html',
  styleUrls: ['./areas-edicao.component.scss']
})
export class AreasEdicaoComponent implements OnInit {

  selectedArea?: Area;
  formArea = this.formBuilder.group({
    nomeArea: ['', [Validators.required]],
  });

  _isProcessing: boolean = false;
  _isLoading: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private snackbar: MatSnackBar,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
  //   Carregar valores iniciais
    const areaId = this.activatedRoute.snapshot.params["id"]

    this.backendService.getArea(areaId).subscribe({
      next: (area) => {
        this.selectedArea = area;
        this.formArea.controls.nomeArea.setValue(area.nome_area);
        this._isLoading = false;
      }
    });
  }

  async onSubmit() {
    if (this.formArea.invalid) {
      return;
    }

    this._isProcessing = true;

    try {
      // Criar um objeto de área, para envio ao backend
      const area = {
        id_area: this.selectedArea!.id_area,
        nome_area: this.formArea.controls.nomeArea.value,
      };

      this.backendService.editarArea(area).subscribe({
        next: (response) => {
          console.log(response);

          if (response['status'] == 'success') {
            this.snackbar.open('Área editada com sucesso!', 'Fechar', {
              duration: 5000,
            });
            this.voltarTelaConsulta();
          } else {
            this.snackbar.open('Erro desconhecido ao editar a área.', 'Fechar', {
              duration: 5000,
            });
          }
        }
      });
    } catch (e) {
      this.snackbar.open('Erro ao editar área!', 'Fechar', {
        duration: 5000,
      });
    } finally {
      this._isProcessing = false;
    }
  }

  voltarTelaConsulta() {
    this.router.navigate(['/areas']);
  }

}
