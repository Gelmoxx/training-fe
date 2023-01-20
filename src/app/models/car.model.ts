export class Car{
  id?: number;
  carName: string;
  horsePower: number;
  brandName?: string;
  brandId: number;

  constructor(car: Car) {
    this.id = car.id;
    this.carName = car.carName;
    this.horsePower = car.horsePower;
    this.brandName = car.brandName;
    this.brandId = car.brandId;
  }
}

export class CarList{
  id?: number;
  carName: string;
  horsePower: number;
  brandName: string;
  brandId: number;

  constructor(car: Car) {
    this.id = car.id;
    this.carName = car.carName;
    this.horsePower = car.horsePower;
    this.brandName = car.brandName;
    this.brandId = car.brandId;
  }
}
