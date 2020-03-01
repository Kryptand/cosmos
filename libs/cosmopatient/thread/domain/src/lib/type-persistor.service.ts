import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ThreadType } from './entities/thread.type';
import { AbstractPersistor } from '@kryptand/cosmopatient/shared/domain';
import { THREAD_TYPE_STORAGE_KEY } from './constants';

@Injectable({ providedIn: 'root' })
export class ThreadTypePersistor extends AbstractPersistor<ThreadType> {
  constructor(protected storage: Storage) {
    super(storage, THREAD_TYPE_STORAGE_KEY, ThreadType);
  }
}
