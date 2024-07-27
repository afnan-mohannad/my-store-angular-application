import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutModule } from '../models/checkout/checkout.module';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {
  full_name: string = '';
  order_total: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      this.full_name = data['user_name'];
      this.order_total = data['order_total'];
    });
  }
}
