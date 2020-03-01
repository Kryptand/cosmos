import { AbstractPersistor } from '@kryptand/cosmopatient/shared/domain';
import { Patient } from './entities/patient';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TreatmentPersistor } from './patient-treatment-persistor.service';
import { Storage } from '@ionic/storage';
import { PATIENTS_STORAGE_KEY } from './constants';

@Injectable()
export class PatientPersistor extends AbstractPersistor<Patient> {
  constructor(
    protected storage: Storage,
    protected treatmentPersistor: TreatmentPersistor
  ) {
    super(storage, PATIENTS_STORAGE_KEY, Patient);
  }

  remove(id: string): Observable<any> {
    this.treatmentPersistor.removeForPatient(id).then(r => r);
    return from(this.storage.remove(`${PATIENTS_STORAGE_KEY}${id}`));
  }
}
