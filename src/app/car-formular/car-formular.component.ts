import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Car} from "../models/car.model";

@Component({
  selector: 'app-car-formular',
  templateUrl: './car-formular.component.html',
  styleUrls: ['./car-formular.component.css']
})
export class CarFormularComponent {

  form: FormGroup;

  @Input()
  set car(data: Car){
    if(data){
      this.fillForm(data);
    }
  }

  @Output()
  addCar = new EventEmitter<Car>();

  @Output()
  editCar = new EventEmitter<Car>();

  constructor() {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      carName: new FormControl(null),
      horsePower: new FormControl(null),
      brandName: new FormControl(null),
      brandId: new FormControl(null)
    });
  }

  private fillForm(car: Car): void {
    this.form.controls.id.setValue(car.id);
    this.form.controls.carName.setValue(car.carName);
    this.form.controls.horsePower.setValue(car.horsePower);
    this.form.controls.brandName.setValue(car.brandName);
    this.form.controls.brandId.setValue(car.brandId);
  }

  public add(): void{
    this.addCar.emit({
      carName: this.form.value.carName,
      horsePower: this.form.value.horsePower,
      brandId: this.form.value.brandId
    });
    this.form.reset();
  }

  public edit(): void{
    this.editCar.emit(this.form.value);
    this.form.reset();
  }

  public remove(): void{
    this.car = undefined;
    this.form.reset();
  }
}
