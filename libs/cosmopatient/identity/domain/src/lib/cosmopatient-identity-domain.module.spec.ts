import { async, TestBed } from '@angular/core/testing';
import { CosmopatientIdentityDomainModule } from './cosmopatient-identity-domain.module';

describe('CosmopatientIdentityDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientIdentityDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientIdentityDomainModule).toBeDefined();
  });
});
