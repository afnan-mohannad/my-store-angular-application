import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModule } from './../../models/product/product.module';
import { CartModule } from 'src/app/models/cart/cart.module';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: ProductModule;
  @Output() addedToCart: EventEmitter<CartModule> = new EventEmitter<CartModule>();

  quantity: number = 1;

  constructor(private cartService: CartService) {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  addToCart() {
    const cartItem: CartModule = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      url: this.product.url,
      description: this.product.description,
      quantity: this.quantity,
      totalAmount: this.product.price * this.quantity,
    };
    this.cartService.addToCart(cartItem);
    this.addedToCart.emit(cartItem);  // Emit the event
  }
}
