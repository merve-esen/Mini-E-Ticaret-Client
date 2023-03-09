import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    ProductModule,
    OrderModule,
    CustomerModule
  ]
})
export class ComponentsModule { }
