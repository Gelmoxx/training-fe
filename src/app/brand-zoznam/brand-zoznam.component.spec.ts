import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandZoznamComponent } from './brand-zoznam.component';

describe('BrandZoznamComponent', () => {
  let component: BrandZoznamComponent;
  let fixture: ComponentFixture<BrandZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
