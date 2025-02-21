import {Component, OnInit} from '@angular/core';
import {PrdCardComponent} from "../../component/prd-card/prd-card.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {CartPrdCrdComponent} from "../../component/cart-prd-crd/cart-prd-crd.component";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {CartService} from "../../services/cart-service/cart.service";
import {CartRecommendComponent} from "../../component/cart-recommend/cart-recommend.component";
import {ProductService} from "../../services/product-service/product.service";
import {NgFor} from "@angular/common";
@Component({
  selector: 'app-cart-page',
  standalone: true,
    imports: [
        PrdCardComponent,
        MatButtonModule, MatDividerModule, MatIconModule, CartPrdCrdComponent
        , FormsModule, MatFormFieldModule, MatInputModule, CartRecommendComponent,
        NgFor,
    ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit {
    snackItems: any[] = [];
    totalPrice: number = 0;
    totalItemAmount: number = 0;
    constructor(public cartService: CartService,public productService: ProductService) {
    }

    ngOnInit(): void {
        const snackCategory = this.productService.categories.find(category => category.title === 'SNACK');
        if(snackCategory) {
            console.log(snackCategory);
            this.snackItems = snackCategory.items;
        }
        this.updateTotalPrice();
        this.updateTotalItemAmount();
    }
    updateTotalPrice(): void {
        this.totalPrice = this.cartService.getTotalPrice();
    }
    updateTotalItemAmount(): void {
        this.totalItemAmount = this.cartService.getTotalItemAmount();
    }
}
