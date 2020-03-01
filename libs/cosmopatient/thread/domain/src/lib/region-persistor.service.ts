import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { THREAD_REGION_STORAGE_KEY } from './constants';
import { ThreadRegion } from './entities/thread.region';
import { AbstractPersistor } from '@kryptand/cosmopatient/shared/domain';

@Injectable()
export class ThreadRegionPersistor extends AbstractPersistor<ThreadRegion> {
  constructor(protected storage: Storage) {
    super(storage, THREAD_REGION_STORAGE_KEY, ThreadRegion);
  }
}
