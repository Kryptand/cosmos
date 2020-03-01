import { async, TestBed } from '@angular/core/testing';
import { CosmopatientThreadApiModule } from './cosmopatient-thread-api.module';

describe('CosmopatientThreadApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientThreadApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientThreadApiModule).toBeDefined();
  });
});
