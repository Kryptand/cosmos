import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBotoxFeatureTypeModule } from './cosmopatient-botox-feature-type.module';

describe('CosmopatientBotoxFeatureTypeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBotoxFeatureTypeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBotoxFeatureTypeModule).toBeDefined();
  });
});
