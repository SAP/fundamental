import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlCardComponent } from './fl-card.component';

describe('FlCardComponent', () => {
  let component: FlCardComponent;
  let fixture: ComponentFixture<FlCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlCardComponent]
    });
    fixture = TestBed.createComponent(FlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
