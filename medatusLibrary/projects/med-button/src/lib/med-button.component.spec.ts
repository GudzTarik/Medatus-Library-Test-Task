import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { MedButtonComponent } from './med-button.component';

describe('MedButtonComponent', () => {
  let component: MedButtonComponent;
  let fixture: ComponentFixture<MedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedButtonComponent]
    })
                 .compileComponents();

    fixture = TestBed.createComponent(MedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component)
    .toBeTruthy();
  });
});
