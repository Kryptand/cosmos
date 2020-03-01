import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePerAmountPersistor } from './price-per-amount-persistor.service';
import { BotoxRegionPersistor } from './region-persistor.service';
import { BotoxTypePersistor } from './type-persistor.service';

@NgModule({
  imports: [CommonModule]
})
export class CosmopatientBotoxDomainModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CosmopatientBotoxDomainModule,
      providers: [
        PricePerAmountPersistor,
        BotoxRegionPersistor,
        BotoxTypePersistor
      ]
    };
  }
}
