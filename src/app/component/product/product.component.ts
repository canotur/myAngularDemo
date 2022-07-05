import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/mocks/product-list.mock';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/global/alertify.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] | undefined;

  constructor(private alertifyService:AlertifyService) {
    this.products = ProductList;
   }

  ngOnInit(): void {
  }

  addToCart(product:Product){
    this.alertifyService.success("Added to Favorites");
  }
}
