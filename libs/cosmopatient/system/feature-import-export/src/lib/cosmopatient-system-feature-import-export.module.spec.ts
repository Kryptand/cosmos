import { async, TestBed } from '@angular/core/testing';
import { CosmopatientSystemFeatureImportExportModule } from './cosmopatient-system-feature-import-export.module';

describe('CosmopatientSystemFeatureImportExportModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientSystemFeatureImportExportModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientSystemFeatureImportExportModule).toBeDefined();
  });
});
