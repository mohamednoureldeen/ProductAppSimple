import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../enviroment/baseUrlEnv';
import { ProductServiceAbi } from '../base/productService.abstract';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ProductServiceAbi {

  constructor(private httpclient: HttpClient ) { }
  
  private readonly baseUrl:string = baseUrl.proUrl;

  getProducts():Observable<any>{ {
    return this.httpclient.get(`${this.baseUrl}/products`);
  }
}

getOneProduct(id:string):Observable<any>{ {
  return this.httpclient.get(`${this.baseUrl}/products/${id}`);
}
}
}
