import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeDemoComponent } from './async-pipe-demo.component';

describe('AsyncPipeDemoComponent', () => {
  let component: AsyncPipeDemoComponent;
  let fixture: ComponentFixture<AsyncPipeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncPipeDemoComponent]
    });
    fixture = TestBed.createComponent(AsyncPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
