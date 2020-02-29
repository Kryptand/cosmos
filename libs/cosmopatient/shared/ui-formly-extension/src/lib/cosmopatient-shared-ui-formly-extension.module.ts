import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormlyModule } from '@ngx-formly/core';
import { RepeatComponent } from './repeat/repeat.component';
import { AutocompleteTypeComponent } from './autocomplete/autocomplete-type.component';

@NgModule({
  declarations: [AutocompleteTypeComponent, RepeatComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: RepeatComponent,
          wrappers: null
        },
        {
          name: 'autocomplete',
          component: AutocompleteTypeComponent
        }
      ]
    })
  ]
})
export class CosmopatientSharedUiFormlyExtensionModule {
}
