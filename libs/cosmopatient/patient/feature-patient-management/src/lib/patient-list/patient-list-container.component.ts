import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PatientPersistor } from '@kryptand/cosmopatient/patient/domain';

@Component({
  selector: 'kryptand-patient',
  templateUrl: './patient-list-container.component.html',
  styleUrls: ['./patient-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientListContainer {
  public fieldConfig = [
    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Geschlecht',
        options: [
          { title: 'Männlich', value: 0 },
          { title: 'Weiblich', value: 1 },
          { title: 'Divers', value: 2 }
        ],
        valueProp: 'title',
        labelProp: 'value'
      }
    },
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'Vorname',
        placeholder: 'Vorname',
        required: true
      }
    },

    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        label: 'Nachname',
        placeholder: 'Nachname',
        required: true
      }
    },
    {
      key: 'birthday',
      type: 'datetime',
      templateOptions: {
        type: 'date',
        label: 'Geburtsdatum',
        placeholder: 'Geburtsdatum'
      },
      defaultValue: new Date().toISOString()
    },
    {
      key: 'street',
      type: 'input',
      templateOptions: {
        label: 'Straße',
        placeholder: 'Straße',
        required: true
      }
    },
    {
      key: 'streetNo',
      type: 'input',
      templateOptions: {
        label: 'Hausnummer',
        placeholder: 'Hausnummer',
        required: true
      }
    },
    {
      key: 'zipCode',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Postleitzahl',
        placeholder: 'Postleitzahl',
        required: true
      }
    },
    {
      key: 'city',
      type: 'input',
      templateOptions: {
        label: 'Stadt',
        placeholder: 'Stadt',
        required: true
      }
    },
    {
      key: 'id',
      type: 'input',
      templateOptions: {
        type: 'hidden'
      },
      className: 'hidden'
    }
  ];

  constructor(public patientPersistor: PatientPersistor) {
  }
}
