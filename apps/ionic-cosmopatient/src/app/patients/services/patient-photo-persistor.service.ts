import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { from, Observable } from 'rxjs';
import { Photo } from '../models/photo';
import {
  AbstractPersistor,
  getEntriesFromStorageByKeyAsync,
  removeEntriesFromStorageAsync
} from '../../util/abstract-persistor';

const PHOTO_STORAGE_KEY = '[PHOTO]';

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
