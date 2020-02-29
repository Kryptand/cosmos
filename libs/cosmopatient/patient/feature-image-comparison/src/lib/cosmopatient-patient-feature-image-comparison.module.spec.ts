import { async, TestBed } from '@angular/core/testing';
import { CosmopatientPatientFeatureImageComparisonModule } from './cosmopatient-patient-feature-image-comparison.module';

describe('CosmopatientPatientFeatureImageComparisonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientPatientFeatureImageComparisonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientPatientFeatureImageComparisonModule).toBeDefined();
  });
});
