import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmopatientSharedUiModule } from '@kryptand/cosmopatient/shared/ui-common';
import { IonicModule } from '@ionic/angular';
import { PatientAddEditTreatmentComponent } from './patient-add-edit-treatment/patient-add-edit-treatment.component';
import { PatientAddEditTreatmentContainerComponent } from './patient-add-edit-treatment-container/patient-add-edit-treatment-container.component';
import { PatientListContainer } from './patient-list/patient-list-container.component';
import { PatientTreatmentComponent } from './patient-treatment/patient-treatment.component';

@NgModule({
  imports: [CommonModule, CosmopatientSharedUiModule, IonicModule],
  declarations: [
    PatientAddEditTreatmentComponent,
    PatientAddEditTreatmentContainerComponent,
    PatientListContainer,
    PatientTreatmentComponent
  ],
  exports: [
    PatientAddEditTreatmentComponent,
    PatientAddEditTreatmentContainerComponent,
    PatientListContainer,
    PatientTreatmentComponent
  ]
})
export class CosmopatientPatientFeaturePatientManagementModule {
}
