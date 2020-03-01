import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { BotoxRegionContainerComponent } from './region-list/botox-region-container.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [BotoxRegionContainerComponent],
  declarations: [BotoxRegionContainerComponent]
})
export class CosmopatientBotoxFeatureRegionModule {
}
