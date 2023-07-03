import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SensorAtuadorQueryModel } from '../interfaces/sensor-atuador-query-model';
import {Area} from "../interfaces/area";
import {Cultura} from "../interfaces/cultura";
import {Usuario} from "../interfaces/usuario";

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
}
