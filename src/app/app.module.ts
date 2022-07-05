import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Global Services
import { AlertifyService } from './services/global/alertify/alertify.service';
import { CartService } from './services/local/cart/cart.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    CategoryComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AlertifyService,
    CartService,
    {provide:"productUrl", useValue:"https://localhost:44372/api/products"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
