import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CustomerFormularComponent} from "./customer-formular/customer-formular.component";
import {CustomerStrankaComponent} from "./customer-stranka/customer-stranka.component";
import {CustomerZoznamComponent} from "./customer-zoznam/customer-zoznam.component";
import { KnihaFormularComponent } from './kniha-formular/kniha-formular.component';
import { KnihyZoznamComponent } from './knihy-zoznam/knihy-zoznam.component';
import { KnihaStrankaComponent } from './kniha-stranka/kniha-stranka.component';
import {MenuComponent} from "./menu/menu.component";
import {HttpClientModule} from "@angular/common/http";
import {BorrowingZoznamComponent} from "./borrowing-zoznam/borrowing-zoznam.component";
import {BorrowingStrankaComponent} from "./borrowing-stranka/borrowing-stranka.component";
import {BorrowingFormularComponent} from "./borrowing-formular/borrowing-formular.component";
import { CarFormularComponent } from './car-formular/car-formular.component';
import { CarZoznamComponent } from './car-zoznam/car-zoznam.component';
import { CarStrankaComponent } from './car-stranka/car-stranka.component';
import { BrandFormularComponent } from './brand-formular/brand-formular.component';
import { BrandZoznamComponent } from './brand-zoznam/brand-zoznam.component';
import { BrandStrankaComponent } from './brand-stranka/brand-stranka.component';



@NgModule({
  declarations: [
    AppComponent,
    BorrowingZoznamComponent,
    BorrowingStrankaComponent,
    BorrowingFormularComponent,
    KnihaFormularComponent,
    KnihyZoznamComponent,
    KnihaStrankaComponent,
    CustomerFormularComponent,
    CustomerStrankaComponent,
    CustomerZoznamComponent,
    MenuComponent,
    CarFormularComponent,
    CarZoznamComponent,
    CarStrankaComponent,
    BrandFormularComponent,
    BrandZoznamComponent,
    BrandStrankaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
