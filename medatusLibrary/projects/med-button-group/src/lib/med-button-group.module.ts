import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { MedButtonGroupDirective } from './med-button-group.directive';
import { MedButtonGroupConfig } from './med-button-group.config';
import { MED_BUTTON_GROUP_CONFIG } from './med-button-group.config.token';


@NgModule({
  declarations: [
    MedButtonGroupDirective
  ],
  exports: [
    MedButtonGroupDirective
  ]
})
export class MedButtonGroupModule {
  static forRoot(medButtonGroupConfig: MedButtonGroupConfig): ModuleWithProviders<MedButtonGroupModule> {
    return {
      ngModule: MedButtonGroupModule,
      providers: [
        {
          provide: MED_BUTTON_GROUP_CONFIG,
          useValue: medButtonGroupConfig
        }
      ]
    };
  }
}
