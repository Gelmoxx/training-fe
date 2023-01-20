import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormularComponent } from './car-formular.component';

describe('CarFormularComponent', () => {
  let component: CarFormularComponent;
  let fixture: ComponentFixture<CarFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
