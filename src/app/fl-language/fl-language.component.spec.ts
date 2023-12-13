import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlLanguageComponent } from './fl-language.component';

describe('FlLanguageComponent', () => {
  let component: FlLanguageComponent;
  let fixture: ComponentFixture<FlLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlLanguageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
