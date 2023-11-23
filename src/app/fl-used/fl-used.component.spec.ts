import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlUsedComponent } from './fl-used.component';

describe('FlUsedComponent', () => {
  let component: FlUsedComponent;
  let fixture: ComponentFixture<FlUsedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlUsedComponent]
    });
    fixture = TestBed.createComponent(FlUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
