import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PhotoPersistor } from './patient-photo-persistor.service';
import { from, Observable } from 'rxjs';
import {
  AbstractPersistor,
  getEntriesFromStorageByKeyAsync,
  removeEntriesFromStorageAsync
} from '@kryptand/cosmopatient/shared/domain';
import { Treatment } from './entities/treatment';
import { TREATMENT_STORAGE_KEY } from './constants';

@Injectable()
export class TreatmentPersistor extends AbstractPersistor<Treatment> {
  constructor(
    protected storage: Storage,
    private patientPhoto: PhotoPersistor
  ) {
    super(storage, TREATMENT_STORAGE_KEY, Treatment);
  }

  listForPatient(patientId: string): Observable<any> {
    return from(
      getEntriesFromStorageByKeyAsync(
        `${TREATMENT_STORAGE_KEY}${patientId}`,
        this.storage
      )
    );
  }

  removeForPatient(patientId: string) {
    return removeEntriesFromStorageAsync(
      `${TREATMENT_STORAGE_KEY}${patientId}`,
      this.storage,
      key => {
        const id = key.split(`${TREATMENT_STORAGE_KEY}${patientId}`)[1];
        this.patientPhoto.removeForTreatment(patientId, id).then(r => r);
      }
    );
  }
}
