import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBillingApiModule } from './cosmopatient-billing-api.module';

describe('CosmopatientBillingApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBillingApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBillingApiModule).toBeDefined();
  });
});
