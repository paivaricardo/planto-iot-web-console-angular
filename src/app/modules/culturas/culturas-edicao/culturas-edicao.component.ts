import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from '../../../services/backend.service';
import { Cultura } from '../../../interfaces/cultura';

@Component({
  selector: 'app-culturas-edicao',
  templateUrl: './culturas-edicao.component.html',
  styleUrls: ['./culturas-edicao.component.scss'],
})
export class CulturasEdicaoComponent implements OnInit {
  selectedCultura?: Cultura;
  formCultura = this.formBuilder.group({
    nomeCultura: ['', [Validators.required]],
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
    const culturaId = this.activatedRoute.snapshot.params['id'];

    this.backendService.getCultura(culturaId).subscribe({
      next: (cultura) => {
        this.selectedCultura = cultura;
        this.formCultura.controls.nomeCultura.setValue(cultura.nome_cultura);
        this._isLoading = false;
      },
    });
  }

  async onSubmit() {
    if (this.formCultura.invalid) {
      return;
    }

    this._isProcessing = true;

    try {
      // Criar um objeto de área, para envio ao backend
      const cultura = {
        id_cultura: this.selectedCultura!.id_cultura,
        nome_cultura: this.formCultura.controls.nomeCultura.value,
      };

      this.backendService.editarCultura(cultura).subscribe({
        next: (response) => {
          console.log(response);

          if (response['status'] == 'success') {
            this.snackbar.open('Cultura editada com sucesso!', 'Fechar', {
              duration: 5000,
            });
            this.voltarTelaConsulta();
          } else {
            this.snackbar.open('Erro deseconhecido ao editar a cultura.', 'Fechar', {
              duration: 5000,
            });
          }
        },
      });
    } catch (e) {
      this.snackbar.open('Erro ao editar cultura!', 'Fechar', {
        duration: 5000,
      });
    } finally {
      this._isProcessing = false;
    }
  }

  voltarTelaConsulta() {
    this.router.navigate(['/culturas']);
  }
}
