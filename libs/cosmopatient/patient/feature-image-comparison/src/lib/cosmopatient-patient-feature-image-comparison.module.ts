import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { IonicModule } from '@ionic/angular';
import { PatientImageComponent } from './patient-image/patient-image.component';
import { PatientImageComparisonComponent } from './patient-image-comparison/patient-image-comparison.component';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [PatientImageComponent, PatientImageComparisonComponent],
  declarations: [PatientImageComponent, PatientImageComparisonComponent]
})
export class CosmopatientPatientFeatureImageComparisonModule {
}
