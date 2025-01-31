import { Subscription } from 'rxjs';
import { ProductService } from './../../core/services/product.service';
import { Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../core/interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  supproduct: Subscription = new Subscription();
  private readonly productService = inject(ProductService);
  private readonly activatedRoute = inject(ActivatedRoute);

  product: Iproduct | null = null;



ngOnInit(): void {
let productId: string | null ="" ;
this.activatedRoute.paramMap.subscribe({
  next:(p)=>{
    productId = p.get('id');
  }
})
this.productService.getOneProduct(productId).subscribe({
    next: (res) => {
      this.product = res;
    },
    error: (error) => {
      console.log(error);
    }
 })
}
}
