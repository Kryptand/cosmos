import { async, TestBed } from '@angular/core/testing';
import { CosmopatientSharedUiFormlyExtensionModule } from './cosmopatient-shared-ui-formly-extension.module';

describe('CosmopatientSharedUiFormlyExtensionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientSharedUiFormlyExtensionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientSharedUiFormlyExtensionModule).toBeDefined();
  });
});
