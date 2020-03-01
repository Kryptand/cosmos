import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { ThreadFormComponent } from './thread-form/thread-form.component';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [ThreadFormComponent],
  declarations: [ThreadFormComponent]
})
export class CosmopatientThreadFeatureTreatmentModule {
}
