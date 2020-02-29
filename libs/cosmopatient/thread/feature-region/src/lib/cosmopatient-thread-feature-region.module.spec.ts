import { async, TestBed } from '@angular/core/testing';
import { CosmopatientThreadFeatureRegionModule } from './cosmopatient-thread-feature-region.module';

describe('CosmopatientThreadFeatureRegionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientThreadFeatureRegionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientThreadFeatureRegionModule).toBeDefined();
  });
});
