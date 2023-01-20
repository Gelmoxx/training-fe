import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car, CarList} from "./app/models/car.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:8080/api/cars';

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<CarList[]>{
    return this.http.get<CarList[]>(`${this.apiUrl}`);
  }

  getCar(carId: number): Observable<Car>{
    return this.http.get<Car>(`${this.apiUrl}/${carId}`);
  }

  createCar(car: Car): Observable<Car>{
    return this.http.post<Car>(`${this.apiUrl}`, car);
  }

  updateCar(carId: number, car: Car): Observable<Car>{
    return this.http.put<Car>(`${this.apiUrl}/${carId}`, car);
  }

  deleteCar(carId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${carId}`);
  }


}
