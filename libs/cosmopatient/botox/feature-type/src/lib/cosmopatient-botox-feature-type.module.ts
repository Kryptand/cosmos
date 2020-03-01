import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { BotoxTypeContainerComponent } from './type-list/botox-type-container.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [BotoxTypeContainerComponent],
  declarations: [BotoxTypeContainerComponent]
})
export class CosmopatientBotoxFeatureTypeModule {
}
