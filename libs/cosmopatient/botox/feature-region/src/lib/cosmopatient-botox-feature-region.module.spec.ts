import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBotoxFeatureRegionModule } from './cosmopatient-botox-feature-region.module';

describe('CosmopatientBotoxFeatureRegionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBotoxFeatureRegionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBotoxFeatureRegionModule).toBeDefined();
  });
});
