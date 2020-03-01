import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BotoxType } from './entities/botox.type';
import { AbstractPersistor } from '@kryptand/cosmopatient/shared/domain';
import { BOTOX_TYPE_STORAGE_KEY } from './constants';

@Injectable({ providedIn: 'root' })
export class BotoxTypePersistor extends AbstractPersistor<BotoxType> {
  constructor(protected storage: Storage) {
    super(storage, BOTOX_TYPE_STORAGE_KEY, BotoxType);
  }
}
