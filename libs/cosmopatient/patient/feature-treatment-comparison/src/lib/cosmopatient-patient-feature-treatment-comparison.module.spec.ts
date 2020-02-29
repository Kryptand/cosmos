import { async, TestBed } from '@angular/core/testing';
import { CosmopatientPatientFeatureTreatmentComparisonModule } from './cosmopatient-patient-feature-treatment-comparison.module';

describe('CosmopatientPatientFeatureTreatmentComparisonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientPatientFeatureTreatmentComparisonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientPatientFeatureTreatmentComparisonModule).toBeDefined();
  });
});
