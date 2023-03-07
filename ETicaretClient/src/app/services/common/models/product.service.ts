import { Injectable } from '@angular/core';
import { CreateProduct } from 'src/app/contracts/product/create-product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) { }

  create(product: CreateProduct, successCallBack?: () => void) {
    this.httpClientService.post({
      controller: "products"
    }, product)
      .subscribe(result => {
        successCallBack();
      });
  }
}
