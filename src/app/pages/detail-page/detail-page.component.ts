import { Component, OnInit } from '@angular/core';
import {CategoriesHomeComponent} from "../../component/categories-home/categories-home.component";
import {NgForOf} from "@angular/common";
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {ProductService} from "../../services/product-service/product.service";
import {ActivatedRoute} from "@angular/router";
import {itemModel, productModel} from "../../models/product.model";
import {CartService} from "../../services/cart-service/cart.service";

@Component({
  selector: 'app-detail-page',
  standalone: true,
    imports: [
        CategoriesHomeComponent,
        NgForOf,
        MatFabButton,
        MatIcon,
        MatButtonModule
    ],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent {
    currentProduct!: itemModel | undefined;
    amount: number = 1;
    constructor(private route: ActivatedRoute, private productService: ProductService,
                private cartService: CartService) {
        const { id } = this.route.snapshot.params;
        this.currentProduct = this.productService.getProductById(id);
        console.log(id+" "+this.currentProduct);
    }

    addToCart(): void {
        if (this.currentProduct) {
            this.cartService.addToCartDetail({ ...this.currentProduct, amount: this.amount });
        }
    }

    incrementAmount(): void {
        this.amount += 1;
    }

    decrementAmount(): void {
        if (this.amount > 1) {
            this.amount -= 1;
        }
    }
}
