import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { ThreadTypeContainerComponent } from './type/thread-type-container.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [ThreadTypeContainerComponent],
  declarations: [ThreadTypeContainerComponent]
})
export class CosmopatientThreadFeatureTypeModule {
}
