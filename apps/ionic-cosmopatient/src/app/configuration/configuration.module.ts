import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigurationPage } from './configuration.page';
import { ImportExportService } from '../patients/services/export-import.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ConfigurationPage },
      {
        path: 'botox',
        loadChildren: () =>
          import('./../botox/botox.module').then(m => m.BotoxModule)
      },
      {
        path: 'thread',
        loadChildren: () =>
          import('./../thread/thread.module').then(m => m.ThreadModule)
      }
    ])
  ],
  declarations: [ConfigurationPage],
  providers: [ImportExportService]
})
export class ConfigurationPageModule {
}
