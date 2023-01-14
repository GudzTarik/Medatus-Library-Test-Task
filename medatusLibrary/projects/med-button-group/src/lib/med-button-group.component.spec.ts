import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedButtonGroupComponent } from './med-button-group.component';

describe('MedButtonGroupComponent', () => {
  let component: MedButtonGroupComponent;
  let fixture: ComponentFixture<MedButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
