import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SensorAtuadorQueryModel } from '../interfaces/sensor-atuador-query-model';
import { Area } from '../interfaces/area';
import { Cultura } from '../interfaces/cultura';
import { Usuario } from '../interfaces/usuario';
import { TipoSensor } from '../interfaces/tipo-sensor';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private readonly APIURL = environment.backendUrl;

  constructor(private http: HttpClient) {}

  public getSensores(): Observable<SensorAtuadorQueryModel[]> {
    return this.http.get<SensorAtuadorQueryModel[]>(`${this.APIURL}/sensores`);
  }

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.APIURL}/usuarios`);
  }

  public getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(`${this.APIURL}/areas`);
  }

  public getCulturas(): Observable<Cultura[]> {
    return this.http.get<Cultura[]>(`${this.APIURL}/culturas`);
  }

  public cadastrarArea(area: { nome_area: string }): Observable<any> {
    return this.http.post<any>(`${this.APIURL}/areas`, area);
  }

  getArea(areaId: number): Observable<Area> {
    return this.http.get<Area>(`${this.APIURL}/areas/${areaId}`);
  }

  editarArea(area: { nome_area: string; id_area: number }): Observable<any> {
    return this.http.put<any>(`${this.APIURL}/areas/${area.id_area}`, area);
  }

  cadastrarCultura(cultura: { nome_cultura: string }) {
    return this.http.post<any>(`${this.APIURL}/culturas`, cultura);
  }

  getCultura(culturaId: any): Observable<Cultura> {
    return this.http.get<Cultura>(`${this.APIURL}/culturas/${culturaId}`);
  }

  editarCultura(cultura: {
    id_cultura: number;
    nome_cultura: string;
  }): Observable<any> {
    return this.http.put<any>(
      `${this.APIURL}/culturas/${cultura.id_cultura}`,
      cultura
    );
  }

  getTipoSensores(): Observable<TipoSensor[]> {
    return this.http.get<TipoSensor[]>(`${this.APIURL}/tipos-sensores`);
  }

  preCadastrarSensor(
    sensor: {
      id_tipo_sensor: number,
      email_usuario: string,
      uuid_selecionado?: string
    }): Observable<any> {
    let objectHttpParamsBuilder = {};

    if (!sensor.uuid_selecionado) {
      objectHttpParamsBuilder = {
        id_tipo_sensor: sensor.id_tipo_sensor,
        email_usuario: sensor.email_usuario,
      };
    } else {
      objectHttpParamsBuilder = {
        id_tipo_sensor: sensor.id_tipo_sensor,
        email_usuario: sensor.email_usuario,
        uuid_selecionado: sensor.uuid_selecionado,
      };
    }

    const httpParams = new HttpParams({
      fromObject: objectHttpParamsBuilder,
    });

    return this.http.post<any>(`${this.APIURL}/pre-cadastrar-sensor-atuador`, {}, {
      params: httpParams,
    });
  }
}
