import { async, TestBed } from '@angular/core/testing';
import { CosmopatientPatientShellModule } from './cosmopatient-patient-shell.module';

describe('CosmopatientPatientShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientPatientShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientPatientShellModule).toBeDefined();
  });
});
