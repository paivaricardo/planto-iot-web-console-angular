import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required]],
  });
  _isProcessing: boolean = false;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private loginService: LoginService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async onSubmit() {
    if (this.formLogin.valid) {
      this._isProcessing = true;

      console.log('Formulário válido');

      const loginResult: boolean = await this.loginService.login({
        email: this.formLogin.controls.email.value,
        password: this.formLogin.controls.senha.value,
      });

      if (!loginResult) {
        console.error('Erro ao realizar login');

        this.snackbar.open('Usuário ou senha inválidos', 'Fechar', {
          duration: 5000,
        });
        this._isProcessing = false;
      }
    }
  }
}
