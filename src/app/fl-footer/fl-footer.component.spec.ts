import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlFooterComponent } from './fl-footer.component';

describe('FlFooterComponent', () => {
  let component: FlFooterComponent;
  let fixture: ComponentFixture<FlFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlFooterComponent]
    });
    fixture = TestBed.createComponent(FlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
