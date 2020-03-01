import { Treatment } from '../../../../../../../apps/ionic-cosmopatient/src/app/patients/models/treatment';
import { TreatmentDetail } from '../../../../../../../apps/ionic-cosmopatient/src/app/patients/models/treatment-detail';

export interface BotoxTreatment extends Treatment {
  type: 'Botox';
  detail: TreatmentDetail[];
  pricePerAmount: number;
}
