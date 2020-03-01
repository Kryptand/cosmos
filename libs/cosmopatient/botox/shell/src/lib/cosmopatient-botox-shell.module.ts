import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CosmopatientBotoxFeatureRegionModule } from '@kryptand/cosmopatient/botox/feature-region';
import { CosmopatientBotoxFeatureTypeModule } from '@kryptand/cosmopatient/botox/feature-type';
import { CosmopatientBotoxFeatureTreatmentModule } from '@kryptand/cosmopatient/botox/feature-treatment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () =>
          import('@kryptand/cosmopatient/botox/feature-region').then(
            m => CosmopatientBotoxFeatureRegionModule
          )
      },
      {
        path: 'type',
        loadChildren: () =>
          import('@kryptand/cosmopatient/botox/feature-type').then(
            m => CosmopatientBotoxFeatureTypeModule
          )
      },
      {
        path: 'treatment',
        loadChildren: () =>
          import('@kryptand/cosmopatient/botox/feature-treatment').then(
            m => CosmopatientBotoxFeatureTreatmentModule
          )
      }
    ])
  ]
})
export class CosmopatientBotoxShellModule {
}
