import { async, TestBed } from '@angular/core/testing';
import { CosmopatientThreadFeatureTreatmentModule } from './cosmopatient-thread-feature-treatment.module';

describe('CosmopatientThreadFeatureTreatmentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientThreadFeatureTreatmentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientThreadFeatureTreatmentModule).toBeDefined();
  });
});
