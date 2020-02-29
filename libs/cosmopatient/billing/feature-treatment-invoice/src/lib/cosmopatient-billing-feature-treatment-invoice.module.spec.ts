import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBillingFeatureTreatmentInvoiceModule } from './cosmopatient-billing-feature-treatment-invoice.module';

describe('CosmopatientBillingFeatureTreatmentInvoiceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBillingFeatureTreatmentInvoiceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBillingFeatureTreatmentInvoiceModule).toBeDefined();
  });
});
