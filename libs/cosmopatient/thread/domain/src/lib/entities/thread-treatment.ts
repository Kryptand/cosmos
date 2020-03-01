import { Treatment } from '../../../../../../../apps/ionic-cosmopatient/src/app/patients/models/treatment';
import { TreatmentDetail } from '../../../../../../../apps/ionic-cosmopatient/src/app/patients/models/treatment-detail';

export interface ThreadTreatment extends Treatment {
  type: 'Thread';
  detail: TreatmentDetail[];
}
