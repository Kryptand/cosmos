import { async, TestBed } from '@angular/core/testing';
import { CosmopatientPatientDomainModule } from './cosmopatient-patient-domain.module';

describe('CosmopatientPatientDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientPatientDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientPatientDomainModule).toBeDefined();
  });
});
