import { Component, OnInit } from '@angular/core';
import {Car, CarList} from "../models/car.model";
import {CarService} from "../../car.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car-stranka',
  templateUrl: './car-stranka.component.html',
  styleUrls: ['./car-stranka.component.css']
})
export class CarStrankaComponent implements OnInit {

  cars: Car[] = []
  actCar?: Car;

  constructor(private router: Router, private carService: CarService) {

  }

  ngOnInit(): void {
    this.refreshCars();
  }


  private refreshCars() {
    this.carService.getCars().subscribe(data => {
      this.cars = [];
      for(const d of data){
        this.cars.push({id: d.id, carName: d.carName, horsePower: d.horsePower, brandName: d.brandName, brandId: d.brandId});
      }
    });
  }

  add(car: Car): void{
    this.carService.createCar(car).subscribe(data => {
      this.refreshCars();
    });
  }

  edit(car: Car): void{
    this.carService.updateCar(car.id, car).subscribe(data => {
      this.refreshCars();
    });
  }

  editCarFromList(car: Car): void{
    this.actCar = car;
  }

  removeCarFromList(car: Car): void{
    this.carService.deleteCar(car.id).subscribe(data => {
      this.refreshCars();
    });
  }

  goBack(): void{
    this.router.navigate(['']);
  }
}
