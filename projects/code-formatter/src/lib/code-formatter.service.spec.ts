import { TestBed } from '@angular/core/testing';

import { CodeFormatterService } from './code-formatter.service';

describe('CodeFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeFormatterService = TestBed.get(CodeFormatterService);
    expect(service).toBeTruthy();
  });
});
