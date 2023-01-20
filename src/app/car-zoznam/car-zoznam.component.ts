import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car, CarList} from "../models/car.model";

@Component({
  selector: 'app-car-zoznam',
  templateUrl: './car-zoznam.component.html',
  styleUrls: ['./car-zoznam.component.css']
})
export class CarZoznamComponent{

  @Input()
  cars: Car[] = [];

  @Output()
  editCar: EventEmitter<Car> = new EventEmitter<Car>();

  @Output()
  removeCar: EventEmitter<Car> = new EventEmitter<Car>();

  edit(car: Car): void{
    this.editCar.emit(car);
  }

  remove(car: Car): void{
    this.removeCar.emit(car);
  }



}
