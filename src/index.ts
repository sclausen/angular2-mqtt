import {ModuleWithProviders, NgModule} from '@angular/core';

import {MqttServiceOptions} from './mqtt.model';
import {MqttService} from './mqtt.service';

export * from './mqtt.service';
export * from './mqtt.model';

export const MQTT_SERVICE_OPTIONS: MqttServiceOptions = {
  connectOnCreate: true,
  hostname: 'localhost',
  port: 1884,
  path: ''
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({})
export class MqttModule {
  static forRoot(providedService: any = {
    provide: MqttService,
    useFactory: mqttServiceFactory
  }): ModuleWithProviders {
    return {ngModule: MqttModule, providers: [providedService]};
  }
}