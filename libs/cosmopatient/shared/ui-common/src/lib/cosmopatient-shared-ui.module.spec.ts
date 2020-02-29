import { async, TestBed } from '@angular/core/testing';
import { CosmopatientSharedUiModule } from './cosmopatient-shared-ui.module';

describe('CosmopatientSharedUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientSharedUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientSharedUiModule).toBeDefined();
  });
});
