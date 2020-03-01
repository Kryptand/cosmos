import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewChild
} from '@angular/core';
import { map } from 'rxjs/operators';
import {
  AbstractTreatmentForm,
  FormComponent
} from '@kryptand/cosmopatient/shared/ui-common';
import {
  ThreadRegionPersistor,
  ThreadTypePersistor,
  ThreadTreatment
} from '@kryptand/cosmopatient/thread/domain';

@Component({
  selector: 'kryptand-thread-form',
  templateUrl: './thread-form.component.html',
  styleUrls: ['./thread-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadFormComponent extends AbstractTreatmentForm<ThreadTreatment> {
  @ViewChild('form') formComponent: FormComponent;
  fieldConfig: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Titel',
        placeholder: 'Titel',
        required: true
      },
      defaultValue: 'Fadenbehandlung'
    },
    {
      key: 'date',
      type: 'datetime',
      templateOptions: {
        type: 'date',
        label: 'Datum',
        placeholder: 'Datum'
      },
      defaultValue: new Date().toISOString()
    },
    {
      key: 'type',
      type: 'select',
      templateOptions: {
        label: 'Typ',
        options: this.threadTypePersistor.list(),
        valueProp: 'id',
        labelProp: 'title'
      }
    },
    {
      key: 'id',
      type: 'input',
      templateOptions: {
        type: 'hidden'
      },
      className: 'hidden'
    },
    {
      key: 'detail',
      type: 'repeat',
      templateOptions: {
        addText: 'Region hinzufügen'
      },
      className: 'botox-form__region_and_amount ',
      fieldArray: {
        fieldGroup: [
          {
            key: 'region',
            type: 'autocomplete',
            className: 'region',
            templateOptions: {
              attributes: {
                autocomplete: 'off'
              },
              label: 'Region',
              options: this.threadRegionPersistor.list().pipe(
                map(regions => {
                  const regionTitles = regions.map(region => region.title);
                  return [].concat.apply([], regionTitles);
                })
              ),
              placeholder: 'Region',
              required: true
            }
          },
          {
            key: 'amount',
            type: 'input',
            className: 'amount',
            templateOptions: {
              label: 'Menge',
              placeholder: 'Menge',
              required: true
            }
          }
        ]
      }
    },
    {
      key: 'price',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Preis',
        placeholder: 'Preis',
        required: true
      }
    }
  ];

  constructor(
    protected threadTypePersistor: ThreadTypePersistor,
    protected threadRegionPersistor: ThreadRegionPersistor,
    protected cd: ChangeDetectorRef
  ) {
    super(threadTypePersistor, threadRegionPersistor, cd);
  }
}
