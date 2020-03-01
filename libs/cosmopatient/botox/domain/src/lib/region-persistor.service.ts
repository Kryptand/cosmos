import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AbstractPersistor } from '@kryptand/cosmopatient/shared/domain';
import { BotoxRegion } from './entities/botox-region';
import { BOTOX_REGION_STORAGE_KEY } from './constants';

@Injectable({ providedIn: 'root' })
export class BotoxRegionPersistor extends AbstractPersistor<BotoxRegion> {
  constructor(protected storage: Storage) {
    super(storage, BOTOX_REGION_STORAGE_KEY, BotoxRegion);
  }
}
