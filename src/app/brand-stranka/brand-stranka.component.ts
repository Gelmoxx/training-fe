import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/customer.model";
import {Router} from "@angular/router";
import {CustomerService} from "../../customer.service";
import {Brand} from "../models/brand.model";
import {BrandService} from "../../brand.service";

@Component({
  selector: 'app-brand-stranka',
  templateUrl: './brand-stranka.component.html',
  styleUrls: ['./brand-stranka.component.css']
})
export class BrandStrankaComponent implements OnInit {

  brands: Brand[] = [];
  actBrand?: Brand;

  constructor(private router: Router, private brandService: BrandService) { }

  ngOnInit(): void {
    // httpclient kniznica
    // this.customerService.getCustomers().subscribe(data => {
    //   this.customers = data;
    //   console.log('Prislo: ' + data);
    // });
    this.refreshCustomers();
  }

  refreshCustomers(): void{
    this.brandService.getBrands().subscribe(data => {
      console.log('Prislo:',data);
      this.brands = [];
      for (const d of data){
        this.brands.push({id: d.id, brandName: d.brandName});
      }
    });
  }

  goBack(): void{
    this.router.navigate(['']);
  }

  add(brand: Brand): void{
    this.brandService.createBrand(brand).subscribe(data => {
      console.log('prislo: ' + data);
      this.refreshCustomers();
    });
    // this.customers.push(customer);
  }

  edit(brand: Brand): void{
    // const index = this.customers.findIndex(customerFromList => customerFromList.id === customer.id);
    // if(index !== -1){
    //   this.customers[index] = customer;
    // }

    this.brandService.updateBrand(brand.id, brand).subscribe(data => {
      console.log('edited: ', brand);
      this.refreshCustomers();
    });

  }

  editBrandFromList(brand: Brand): void{
    this.actBrand= brand;
  }

  removeBrandFromList(brand: Brand): void{

    this.brandService.deleteBrand(brand.id).subscribe(data => {
      console.log('deleted: ' + data);
      this.refreshCustomers();
    });

  }

}
