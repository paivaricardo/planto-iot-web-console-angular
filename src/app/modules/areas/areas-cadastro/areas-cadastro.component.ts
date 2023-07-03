import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-areas-cadastro',
  templateUrl: './areas-cadastro.component.html',
  styleUrls: ['./areas-cadastro.component.scss'],
})
export class AreasCadastroComponent {
  formArea = this.formBuilder.group({
    nomeArea: ['', [Validators.required]],
  });

  _isProcessing: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private backendService: BackendService,
    public snackbar: MatSnackBar
  ) {}

  async onSubmit() {
    if (this.formArea.invalid) {
      return;
    }

    this._isProcessing = true;

    try {
      // Criar um objeto de área, para envio ao backend
      const area = {
        nome_area: this.formArea.controls.nomeArea.value,
      };

      this.backendService.cadastrarArea(area).subscribe({
        next: (response) => {
          console.log(response);

          if (response['status'] == 'success') {
            this.voltarTelaConsulta();
            this.snackbar.open('Área cadastrada com sucesso!', 'Fechar', {
              duration: 5000,
            });
          } else {
            this.snackbar.open('Erro desconhecido ao cadastrar a área.', 'Fechar', {
              duration: 5000,
            });
          }
        },
      });
    } catch (e) {
      this.snackbar.open('Erro ao cadastrar área!', 'Fechar', {
        duration: 5000,
      });
    } finally {
      this._isProcessing = false;
    }
  }

  voltarTelaConsulta() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
