import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBotoxApiModule } from './cosmopatient-botox-api.module';

describe('CosmopatientBotoxApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBotoxApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBotoxApiModule).toBeDefined();
  });
});
