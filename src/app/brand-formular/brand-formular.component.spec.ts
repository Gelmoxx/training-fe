import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandFormularComponent } from './brand-formular.component';

describe('BrandFormularComponent', () => {
  let component: BrandFormularComponent;
  let fixture: ComponentFixture<BrandFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
