import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarStrankaComponent } from './car-stranka.component';

describe('CarStrankaComponent', () => {
  let component: CarStrankaComponent;
  let fixture: ComponentFixture<CarStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
