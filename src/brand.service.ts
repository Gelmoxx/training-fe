import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brand, BrandList} from "./app/models/brand.model";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/brands';


  getBrands(): Observable<BrandList[]>{
    return this.http.get<BrandList[]>(`${this.apiUrl}`);
  }

  getBrand(brandId: number): Observable<Brand>{
    return this.http.get<Brand>(`${this.apiUrl}/${brandId}`);
  }

  createBrand(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>(`${this.apiUrl}`, brand);
  }

  updateBrand(brandId: number, brand: Brand): Observable<Brand>{
    return this.http.put<Brand>(`${this.apiUrl}/${brandId}`, brand);
  }

  deleteBrand(brandId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${brandId}`);
  }
}
