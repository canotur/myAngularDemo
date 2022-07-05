import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/mocks/product-list.mock';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/global/alertify/alertify.service';
import { CartService } from 'src/app/services/local/cart/cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  addedProduct: Product | undefined;
  products:Product[] | undefined;


  constructor(
      private alertifyService:AlertifyService,
      private cartService:CartService
    ) {
    this.products = ProductList;
   }

  ngOnInit(): void {
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    this.alertifyService.success("Added to Favorites:" + product.name);
    this.addedProduct = product;
  }
}
