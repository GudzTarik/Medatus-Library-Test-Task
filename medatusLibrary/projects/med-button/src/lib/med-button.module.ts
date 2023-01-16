import {
  ModuleWithProviders,
  NgModule
} from '@angular/core';
import { MedButtonDirective } from './med-button.directive';
import { MedButtonConfig } from './med-button.config';
import { MED_BUTTON_CONFIG } from './med-button.config.token';


@NgModule({
  declarations: [
    MedButtonDirective
  ],
  exports: [
    MedButtonDirective
  ]
})
export class MedButtonModule {
  static forRoot(medButtonConfig: MedButtonConfig): ModuleWithProviders<MedButtonModule> {
    return {
      ngModule: MedButtonModule,
      providers: [
        {
          provide: MED_BUTTON_CONFIG,
          useValue: medButtonConfig
        }
      ]
    };
  }
}
