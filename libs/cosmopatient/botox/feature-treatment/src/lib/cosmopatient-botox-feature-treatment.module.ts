import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotoxFormComponent } from './botox-form/botox-form.component';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [BotoxFormComponent],
  declarations: [BotoxFormComponent]
})
export class CosmopatientBotoxFeatureTreatmentModule {
}
