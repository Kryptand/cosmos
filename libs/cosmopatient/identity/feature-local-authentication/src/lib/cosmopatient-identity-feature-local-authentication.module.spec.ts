import { async, TestBed } from '@angular/core/testing';
import { CosmopatientIdentityFeatureLocalAuthenticationModule } from './cosmopatient-identity-feature-local-authentication.module';

describe('CosmopatientIdentityFeatureLocalAuthenticationModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientIdentityFeatureLocalAuthenticationModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientIdentityFeatureLocalAuthenticationModule).toBeDefined();
  });
});
