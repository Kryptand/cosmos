import { async, TestBed } from '@angular/core/testing';
import { CosmopatientBotoxShellModule } from './cosmopatient-botox-shell.module';

describe('CosmopatientBotoxShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CosmopatientBotoxShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CosmopatientBotoxShellModule).toBeDefined();
  });
});
