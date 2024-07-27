import { Component } from '@angular/core';
import { CartModule } from '../models/cart/cart.module';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: CartModule[] = this.cartService.getItems();
  orderTotal = this.cartService.getTotal();

  constructor(private cartService: CartService) { }

  removeFromCart(item: CartModule) {
    this.cartService.removeFromCart(item);
    this.orderTotal = this.cartService.getTotal();
  }

  updateQuantity(qty: number, item: CartModule) {
    if(qty === 0) {
      this.removeFromCart(item);
    }
    this.cartService.updateCartInformation(this.items);
    this.orderTotal = this.cartService.getTotal();
  }
}
