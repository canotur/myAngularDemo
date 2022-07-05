import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartItem } from 'src/app/models/cart-item';
import { CART_ITEM_LIST } from 'src/app/models/cart-item-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] | undefined;
  constructor() { }

  addToCart(product: Product): void {
    let addedItem = undefined;
    // let indexNo = 0;
    //debugger;
    console.log(product);
    console.log(CART_ITEM_LIST.length);
    console.log(CART_ITEM_LIST);
    console.log(CART_ITEM_LIST[0]);
    console.log(CART_ITEM_LIST[1]);
    console.log(CART_ITEM_LIST[2]);
    if (CART_ITEM_LIST.length > 0) {
      addedItem = CART_ITEM_LIST.find(t => t.product.id == product.id);
      //indexNo = CART_ITEM_LIST.indexOf(addedItem);
    }

    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      let cartItem = new CartItem();
      cartItem.product = product;
      CART_ITEM_LIST.push(cartItem);
    }

  }

  list(): CartItem[] {
    return CART_ITEM_LIST;
  }

  clear(): void {
    CART_ITEM_LIST.splice(0, CART_ITEM_LIST.length);
  }

  removeFromCart(product: Product) {
    var addedItem = CART_ITEM_LIST.find(t => t.product.id = product.id);

    debugger;

    if (addedItem) {
      if (addedItem.quantity = 1) {
        var indexNo = CART_ITEM_LIST.indexOf(addedItem);
        CART_ITEM_LIST.splice(indexNo, 1);
      }
      else {
        addedItem.quantity -= 1;
      }
    }
  }
}
