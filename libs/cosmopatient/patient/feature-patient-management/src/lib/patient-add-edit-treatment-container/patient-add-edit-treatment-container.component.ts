import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Type,
  ChangeDetectorRef
} from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Treatment } from '@kryptand/cosmopatient/patient/domain';
import { BotoxFormComponent } from '../../../../../botox/feature-treatment/src/lib/botox-form/botox-form.component';
import { ThreadFormComponent } from '../../../../../thread/feature-treatment/src/lib/thread-form/thread-form.component';

@Component({
  selector: 'kryptand-patient-add-edit-treatment-container',
  templateUrl: './patient-add-edit-treatment-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientAddEditTreatmentContainerComponent {
  @Input() treatment: Treatment;
  @Input() patientId: string;
  botoxActive: boolean = true;
  botoxComponent: Promise<Type<BotoxFormComponent>>;
  threadComponent: Promise<Type<ThreadFormComponent>>;
  threadActive: boolean = false;
  customActive: boolean = false;
  pop: PopoverController;
  treatmentInput = {
    entity: this.treatment
  };
  treatmentOutputs = {
    saveEntity: entity => {
      this.saveTreatmentEventEmitted(entity);
    },
    cancel: () => {
      this.cancelEventEmitted();
    }
  };

  constructor(private navParams: NavParams, private cd: ChangeDetectorRef) {
    this.patientId = navParams.get('patientId');
    this.treatment = navParams.get('treatment');
    this.pop = navParams.get('popover');

    this.botoxComponent = import(
      `../../../botox/components/botox-form/botox-form.component`
      ).then(({ BotoxFormComponent }) => BotoxFormComponent);
  }

  cancelEventEmitted() {
    this.pop.dismiss().then(r => r);
  }

  saveTreatmentEventEmitted(treatment: Treatment) {
    this.pop.dismiss(treatment).then(r => r);
  }

  segmentChanged(event: CustomEvent) {
    const {
      detail: { value }
    } = event;
    this.botoxActive = value === 'botox';
    this.threadActive = value === 'threads';
    this.customActive = value === 'custom';

    if (!this.threadActive && !this.threadComponent) {
      this.threadComponent = import(
        `../../../thread/components/thread-form/thread-form.component`
        )
        .then(({ ThreadFormComponent }) => ThreadFormComponent)
        .then(r => {
          this.cd.markForCheck();
          return r;
        });
    }
  }
}
