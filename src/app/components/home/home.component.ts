import { Subscription } from 'rxjs';
import { ProductService } from './../../core/services/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  imports: [ CardComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

private readonly productService =inject(ProductService);
supproduct:Subscription = new Subscription();
products: Iproduct[] = [];
isLoading:boolean = false;
getProduct():void{
  this.isLoading = true;
  this.productService.getProducts().subscribe({
    next: (res) => {
    this.products = res;
    this.isLoading = false;
    },
    error: (error) => {
      console.log(error);
    }
  })
}


ngOnInit(): void {
  
  this.getProduct();
  
}
ngOnDestroy(): void {
  this.supproduct.unsubscribe();
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  
}

}
