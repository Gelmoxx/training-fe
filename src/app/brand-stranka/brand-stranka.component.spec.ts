import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStrankaComponent } from './brand-stranka.component';

describe('BrandStrankaComponent', () => {
  let component: BrandStrankaComponent;
  let fixture: ComponentFixture<BrandStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
