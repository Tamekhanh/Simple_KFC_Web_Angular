import {Component, Input} from '@angular/core';
import {ProductService} from "../../services/product-service/product.service";
import {NgFor} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {CartService} from "../../services/cart-service/cart.service";
import {CartPageComponent} from "../../pages/cart-page/cart-page.component";
@Component({
  selector: 'app-cart-recommend',
  standalone: true,
  imports: [NgFor,MatIconModule],
  templateUrl: './cart-recommend.component.html',
  styleUrl: './cart-recommend.component.scss'
})
export class CartRecommendComponent {
  constructor(public productService: ProductService,public cartService: CartService, private cartPage: CartPageComponent) {
  }
  @Input() items: any[] = [];
  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.cartPage.updateTotalPrice();
    this.cartPage.updateTotalItemAmount()
  }
}
