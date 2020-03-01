import { async, TestBed } from '@angular/core/testing';
import { CosmopatientThreadShellModule } from './cosmopatient-thread-shell.module';

describe('CosmopatientThreadShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientThreadShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientThreadShellModule).toBeDefined();
  });
});
