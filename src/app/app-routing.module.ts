import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerStrankaComponent} from "./customer-stranka/customer-stranka.component";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {BorrowingStrankaComponent} from "./borrowing-stranka/borrowing-stranka.component";
import {MenuComponent} from './menu/menu.component';
import {CarStrankaComponent} from "./car-stranka/car-stranka.component";
import {BrandStrankaComponent} from "./brand-stranka/brand-stranka.component";



const routes: Routes = [
  {
    path: 'customers',
    component: CustomerStrankaComponent
  },
  {
    path: 'books',
    component: KnihaStrankaComponent
  },
  {
    path: 'borrowings',
    component: BorrowingStrankaComponent
  },
  {
    path: 'cars',
    component: CarStrankaComponent
  },
  {
    path: 'brands',
    component: BrandStrankaComponent
  },
  {
    path: '',
    component: MenuComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
