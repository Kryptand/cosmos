import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { ThreadRegionContainerComponent } from './region/thread-region-container.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [ThreadRegionContainerComponent],
  declarations: [ThreadRegionContainerComponent]
})
export class CosmopatientThreadFeatureRegionModule {
}
