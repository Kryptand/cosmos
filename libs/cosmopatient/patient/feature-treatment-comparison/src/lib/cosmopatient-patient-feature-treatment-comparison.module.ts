import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { IonicModule } from '@ionic/angular';
import { PatientImageGalleryComponent } from './patient-image-gallery/patient-image-gallery.component';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  exports: [PatientImageGalleryComponent],
  declarations: [PatientImageGalleryComponent]
})
export class CosmopatientPatientFeatureTreatmentComparisonModule {
}
