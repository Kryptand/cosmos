import { Key } from '@kryptand/cosmopatient/shared/domain';

export class Photo {
  @Key id?: string;
  @Key patientId?: string;
  @Key treatmentId?: string;
  content: string;
  fileName: string;
  createdAt: string;
}
