import { async, TestBed } from '@angular/core/testing';
import { CosmopatientThreadDomainModule } from './cosmopatient-thread-domain.module';

describe('CosmopatientThreadDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientThreadDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientThreadDomainModule).toBeDefined();
  });
});
