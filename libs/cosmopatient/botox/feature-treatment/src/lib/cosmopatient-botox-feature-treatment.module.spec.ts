import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBotoxFeatureTreatmentModule } from './cosmopatient-botox-feature-treatment.module';

describe('CosmopatientBotoxFeatureTreatmentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBotoxFeatureTreatmentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBotoxFeatureTreatmentModule).toBeDefined();
  });
});
