export interface SensorAtuador {
  id_sensor_atuador: number;
  uuid_sensor_atuador: string;
  nome_sensor?: string;
  latitude?: number;
  longitude?: number;
  data_cadastro_sensor?: Date;
  data_precadastro_sensor: Date;
  id_usuario_cadastrante?: number;
  id_area?: number;
  id_cultura?: number;
  id_tipo_sensor?: number;
  observacoes?: string;
}
