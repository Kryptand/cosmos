import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListWithFabComponent } from './list-with-fab/list-with-fab.component';
import { FormComponent } from './form/form.component';
import { CrudContainerComponent } from './crud-container/crud-container.component';
import { OverlayContainerComponent } from './overlay-container/overlay-container.component';

@NgModule({
  declarations: [
    ListWithFabComponent,
    FormComponent,
    CrudContainerComponent,
    OverlayContainerComponent
  ],
  exports: [
    ListWithFabComponent,
    FormComponent,
    CrudContainerComponent,
    OverlayContainerComponent
  ],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule]
})
export class CosmopatientSharedUiModule {
}
