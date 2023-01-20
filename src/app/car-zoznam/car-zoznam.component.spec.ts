import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarZoznamComponent } from './car-zoznam.component';

describe('CarZoznamComponent', () => {
  let component: CarZoznamComponent;
  let fixture: ComponentFixture<CarZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
