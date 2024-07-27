import { Component, OnInit } from '@angular/core';
import { ProductModule as Product } from './../../models/product/product.module';
import { CartModule } from 'src/app/models/cart/cart.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onAddedToCart(cartItem: CartModule) {
    console.log('Product added to cart:', cartItem);
    }
}
