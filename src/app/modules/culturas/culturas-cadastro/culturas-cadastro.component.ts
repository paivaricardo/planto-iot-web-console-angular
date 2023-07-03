import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-culturas-cadastro',
  templateUrl: './culturas-cadastro.component.html',
  styleUrls: ['./culturas-cadastro.component.scss'],
})
export class CulturasCadastroComponent {
  formCultura = this.formBuilder.group({
    nomeCultura: ['', [Validators.required]],
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
    if (this.formCultura.invalid) {
      return;
    }

    this._isProcessing = true;

    try {
      // Criar um objeto de área, para envio ao backend
      const cultura = {
        nome_cultura: this.formCultura.controls.nomeCultura.value,
      };

      this.backendService.cadastrarCultura(cultura).subscribe({
        next: (response) => {
          console.log(response);

          if (response['status'] == 'success') {
            this.snackbar.open('Cultura cadastrada com sucesso!', 'Fechar', {
              duration: 5000,
            });
            this.voltarTelaConsulta();
          } else {
            this.snackbar.open('Erro desconhecido ao cadastrar a cultura.', 'Fechar', {
              duration: 5000,
            });
          }
        },
      });

    } catch (e) {
      this.snackbar.open('Erro ao cadastrar cultura!', 'Fechar', {
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
