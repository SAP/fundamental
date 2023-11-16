import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlDesignComponent } from './fl-design.component';

describe('FlDesignComponent', () => {
  let component: FlDesignComponent;
  let fixture: ComponentFixture<FlDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlDesignComponent]
    });
    fixture = TestBed.createComponent(FlDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
