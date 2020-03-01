import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CosmopatientThreadFeatureRegionModule } from '@kryptand/cosmopatient/thread/feature-region';
import { CosmopatientThreadFeatureTypeModule } from '@kryptand/cosmopatient/thread/feature-type';
import { CosmopatientThreadFeatureTreatmentModule } from '@kryptand/cosmopatient/thread/feature-treatment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () =>
          import('@kryptand/cosmopatient/thread/feature-region').then(
            m => CosmopatientThreadFeatureRegionModule
          )
      },
      {
        path: 'type',
        loadChildren: () =>
          import('@kryptand/cosmopatient/thread/feature-type').then(
            m => CosmopatientThreadFeatureTypeModule
          )
      },
      {
        path: 'treatment',
        loadChildren: () =>
          import('@kryptand/cosmopatient/thread/feature-treatment').then(
            m => CosmopatientThreadFeatureTreatmentModule
          )
      }
    ])
  ]
})
export class CosmopatientThreadShellModule {
}
