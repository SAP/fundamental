import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlPurposeComponent } from './fl-purpose.component';

describe('FlPurposeComponent', () => {
  let component: FlPurposeComponent;
  let fixture: ComponentFixture<FlPurposeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlPurposeComponent]
    });
    fixture = TestBed.createComponent(FlPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
