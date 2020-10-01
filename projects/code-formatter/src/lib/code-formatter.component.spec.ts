import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFormatterComponent } from './code-formatter.component';

describe('CodeFormatterComponent', () => {
  let component: CodeFormatterComponent;
  let fixture: ComponentFixture<CodeFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
