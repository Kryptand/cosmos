import { async, TestBed } from '@angular/core/testing';
import { CosmopatientThreadFeatureTypeModule } from './cosmopatient-thread-feature-type.module';

describe('CosmopatientThreadFeatureTypeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientThreadFeatureTypeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientThreadFeatureTypeModule).toBeDefined();
  });
});
