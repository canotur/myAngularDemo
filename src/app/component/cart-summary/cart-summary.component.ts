import { Component, DoCheck, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/local/cart/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})

export class CartSummaryComponent implements OnInit, DoCheck {

  constructor(private cartService: CartService) { }

  totalCartItem: number | undefined;
  totalCartItemPrice: number | undefined;

  cartItems: CartItem[] | undefined;

  ngOnInit(): void {
    this.cartItems = this.cartService.list();
  }

  ngDoCheck(): void {
    this.totalCartItem = this.cartService.list().reduce((a, b) => a + b.quantity, 0);
    this.totalCartItemPrice = this.cartService.list().reduce((a, b) => a + b.quantity * b.product.unitPrice, 0);
  }
}

