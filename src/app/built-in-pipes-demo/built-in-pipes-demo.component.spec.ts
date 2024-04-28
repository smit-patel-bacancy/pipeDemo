import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipesDemoComponent } from './built-in-pipes-demo.component';

describe('BuiltInPipesDemoComponent', () => {
  let component: BuiltInPipesDemoComponent;
  let fixture: ComponentFixture<BuiltInPipesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltInPipesDemoComponent]
    });
    fixture = TestBed.createComponent(BuiltInPipesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
