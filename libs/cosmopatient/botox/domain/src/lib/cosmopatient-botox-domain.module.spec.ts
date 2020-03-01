import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBotoxDomainModule } from './cosmopatient-botox-domain.module';

describe('CosmopatientBotoxDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBotoxDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBotoxDomainModule).toBeDefined();
  });
});
