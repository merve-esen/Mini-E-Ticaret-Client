import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule) },
      { path: "products", loadChildren: () => import("./admin/components/product/product.module").then(module => module.ProductModule) },
      { path: "orders", loadChildren: () => import("./admin/components/order/order.module").then(module => module.OrderModule) }
    ]
  },
  { path: "", component: HomeComponent },
  { path: "products", loadChildren: () => import("./ui/components/product/product.module").then(module => module.ProductModule) },
  { path: "basket", loadChildren: () => import("./ui/components/basket/basket.module").then(module => module.BasketModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
