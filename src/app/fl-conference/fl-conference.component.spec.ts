import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlConferenceComponent } from './fl-conference.component';

describe('FlConferenceComponent', () => {
  let component: FlConferenceComponent;
  let fixture: ComponentFixture<FlConferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlConferenceComponent]
    });
    fixture = TestBed.createComponent(FlConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
