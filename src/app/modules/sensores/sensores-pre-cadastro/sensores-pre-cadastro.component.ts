import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../../../services/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoSensor } from '../../../interfaces/tipo-sensor';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-sensores-pre-cadastro',
  templateUrl: './sensores-pre-cadastro.component.html',
  styleUrls: ['./sensores-pre-cadastro.component.scss'],
})
export class SensoresPreCadastroComponent implements OnInit {
  formPrecadastroSensor = this.formBuilder.group({
    idTipoSensor: [0, [Validators.required]],
    gerarUUIDAleatoriamente: [true],
    uuidSelecionadoSensor: [''],
    idUsuario: [0, [Validators.required]],
  });

  _isProcessing: boolean = false;

  // Variável para armazenar os tipos de sensores
  tiposSensoresList: TipoSensor[] = [];
  usuariosList: Usuario[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private backendService: BackendService,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //   Carregar as informações de tipos de sensores do backend
    this.backendService.getTipoSensores().subscribe({
      next: (tiposSensores: TipoSensor[]) => {
        this.tiposSensoresList = tiposSensores;
      },
    });

    //   Carregar as informações de usuários do backend
    this.backendService.getUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.usuariosList = usuarios;
      },
    });
  }

  validateUUID(): boolean {
    const uuidRegexp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    const selectedUUID =
      this.formPrecadastroSensor.controls.uuidSelecionadoSensor.value;

    if (
      !this.formPrecadastroSensor.controls.gerarUUIDAleatoriamente.value &&
      (selectedUUID.length != 36 || !uuidRegexp.test(selectedUUID))
    ) {
      this.formPrecadastroSensor.controls.uuidSelecionadoSensor.setErrors({
        invalidUUID: true,
      });
      return false;
    } else {
      return true;
    }
  }

  validateTipoSensorSelect(): boolean {
    if (
      !this.tiposSensoresList
        .map((tipoSensor) => tipoSensor.id_tipo_sensor)
        .includes(this.formPrecadastroSensor.controls.idTipoSensor.value)
    ) {
      this.formPrecadastroSensor.controls.idTipoSensor.setErrors({
        tipoSensorInvalido: true,
      });
      return false;
    } else if (this.formPrecadastroSensor.controls.idTipoSensor.value == 0) {
      this.formPrecadastroSensor.controls.idTipoSensor.setErrors({
        valorNaoInformado: true,
      });
      return false;
    } else {
      return true;
    }
  }

  validateUsuario(): boolean {
    if (
      !this.usuariosList
        .map((usuario) => usuario.id_usuario)
        .includes(this.formPrecadastroSensor.controls.idUsuario.value)
    ) {
      this.formPrecadastroSensor.controls.idUsuario.setErrors({
        idUsuarioInvalido: true,
      });
      return false;
    } else if (this.formPrecadastroSensor.controls.idUsuario.value == 0) {
      this.formPrecadastroSensor.controls.idUsuario.setErrors({
        valorNaoInformado: true,
      });
      return false;
    } else {
      return true;
    }
  }

  validateForm(): void {
    this.validateUUID();
    this.validateTipoSensorSelect();
    this.validateUsuario();
  }

  async onSubmit() {
    this.validateForm();

    if (this.formPrecadastroSensor.valid) {
      this._isProcessing = true;

      try {
        const emailUsuario = this.usuariosList.filter(
          (usuario) =>
            usuario.id_usuario ==
            this.formPrecadastroSensor.controls.idUsuario.value
        )[0].email_usuario;

        const sensor = this.formPrecadastroSensor.controls
          .gerarUUIDAleatoriamente
          ? {
              id_tipo_sensor:
                this.formPrecadastroSensor.controls.idTipoSensor.value,
              email_usuario: emailUsuario,
            }
          : {
              id_tipo_sensor:
                this.formPrecadastroSensor.controls.idTipoSensor.value,
              email_usuario: emailUsuario,
              uuid_selecionado:
                this.formPrecadastroSensor.controls.uuidSelecionadoSensor.value,
            };

        this.backendService.preCadastrarSensor(sensor).subscribe({
          next: (preCadastrarSensorResposta) => {
            if (preCadastrarSensorResposta['status'] == 2) {
              this.snackbar.open(
                `Sensor pré-cadastrado com sucesso! UUID gerado: ${preCadastrarSensorResposta['sensor_atuador_precadastrado_info']['uuid_sensor_atuador']}`,
                'Fechar',
                {
                  duration: 5000,
                }
              );

              this.voltarTelaConsulta();
            } else {
              this.snackbar.open(
                'Ocorreu desconhecido um erro ao tentar pré-cadastrar o sensor. Tente novamente mais tarde.',
                'Fechar',
                {
                  duration: 5000,
                }
              );
            }
          },
          error: (error) => {
            this.snackbar.open(
              'Ocorreu um erro ao tentar pré-cadastrar o sensor: ' +
                error.error.message +
                '. Tente novamente mais tarde.',
              'Fechar',
              {
                duration: 5000,
              }
            );
          },
        });
      } catch (error) {
        this.snackbar.open(
          'Ocorreu um erro ao tentar pré-cadastrar o sensor. Tente novamente mais tarde.',
          'Fechar',
          {
            duration: 5000,
          }
        );
      } finally {
        this._isProcessing = false;
      }
    }
  }

  voltarTelaConsulta() {
    this.router.navigate(['/sensores']);
  }
}
