import { Injectable } from '@angular/core';
import {
  AbstractPersistor,
  getEntriesFromStorageByKeyAsync,
  removeEntriesFromStorageAsync
} from '@kryptand/cosmopatient/shared/domain';
import { from, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Photo } from './entities/photo';
import { PHOTO_STORAGE_KEY } from './constants';

@Injectable()
export class PhotoPersistor extends AbstractPersistor<Photo> {
  constructor(protected storage: Storage) {
    super(storage, PHOTO_STORAGE_KEY, Photo);
  }

  listForPatientAndTreatment(
    patientId: string,
    treatmentId: string
  ): Observable<any> {
    return from(
      getEntriesFromStorageByKeyAsync(
        `${PHOTO_STORAGE_KEY}${patientId}${treatmentId}`,
        this.storage
      )
    );
  }

  listAllForPatient(patientId: string): Observable<any> {
    return from(
      getEntriesFromStorageByKeyAsync(
        `${PHOTO_STORAGE_KEY}${patientId}`,
        this.storage
      )
    );
  }

  removeForTreatment(patientId: string, treatmentId: string) {
    return removeEntriesFromStorageAsync(
      `${PHOTO_STORAGE_KEY}${patientId}${treatmentId}`,
      this.storage
    );
  }
}
