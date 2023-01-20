import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../models/customer.model";
import {Brand} from "../models/brand.model";

@Component({
  selector: 'app-brand-zoznam',
  templateUrl: './brand-zoznam.component.html',
  styleUrls: ['./brand-zoznam.component.css']
})
export class BrandZoznamComponent {

  @Input()
  brands: Brand[] = [];

  @Output()
  editBrand: EventEmitter<Brand> = new EventEmitter<Brand>();

  @Output()
  removeBrand: EventEmitter<Brand> = new EventEmitter<Brand>();

  edit(brand: Brand): void{
    this.editBrand.emit(brand);
  }

  remove(brand: Brand): void{
    this.removeBrand.emit(brand);
  }

}
