import { async, TestBed } from '@angular/core/testing';
import { CosmopatientPatientFeaturePatientManagementModule } from './cosmopatient-patient-feature-patient-management.module';

describe('CosmopatientPatientFeaturePatientManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientPatientFeaturePatientManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientPatientFeaturePatientManagementModule).toBeDefined();
  });
});
