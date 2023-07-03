import {Usuario} from "./usuario";
import {Area} from "./area";
import {Cultura} from "./cultura";
import {TipoSensor} from "./tipo-sensor";

export interface SensorAtuadorQueryModel {
  id_sensor_atuador: number;
  uuid_sensor_atuador: string;
  nome_sensor?: string;
  latitude?: number;
  longitude?: number;
  data_cadastro_sensor?: Date;
  data_precadastro_sensor: Date;
  observacoes?: string;
  id_usuario_cadastrante?: number;
  id_area?: number;
  id_cultura?: number;
  id_tipo_sensor?: number;
  usuario_cadastrante?: Usuario;
  area?: Area;
  cultura?: Cultura;
  tipo_sensor?: TipoSensor;
}
