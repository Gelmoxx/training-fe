import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Car} from "../models/car.model";
import {Brand} from "../models/brand.model";

@Component({
  selector: 'app-brand-formular',
  templateUrl: './brand-formular.component.html',
  styleUrls: ['./brand-formular.component.css']
})
export class BrandFormularComponent{

  form: FormGroup;

  @Input()
  set brand(data: Brand){
    if(data){
      this.fillForm(data);
    }
  }

  @Output()
  addBrand = new EventEmitter<Brand>();

  @Output()
  editBrand = new EventEmitter<Brand>();

  constructor() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      brandName: new FormControl(null),
    });
  }

  private fillForm(brand: Brand): void {
    this.form.controls.id.setValue(brand.id);
    this.form.controls.brandName.setValue(brand.brandName);
  }

  public add(): void{
    this.addBrand.emit({
      brandName: this.form.value.brandName,
    });
    this.form.reset();
  }

  public edit(): void{
    this.editBrand.emit(this.form.value);
    this.form.reset();
  }

  public remove(): void{
    this.brand = undefined;
    this.form.reset();
  }

}
