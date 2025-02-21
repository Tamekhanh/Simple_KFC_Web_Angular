import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CartService} from "../../services/cart-service/cart.service";
import {CartPageComponent} from "../../pages/cart-page/cart-page.component";

@Component({
  selector: 'app-cart-prd-crd',
  standalone: true,
    imports: [
        MatFabButton,
        MatIcon
    ],
  templateUrl: './cart-prd-crd.component.html',
  styleUrl: './cart-prd-crd.component.scss'
})
export class CartPrdCrdComponent {
    @Input() item: any;
    constructor(private cartService: CartService, private cdr: ChangeDetectorRef,private cartPage: CartPageComponent) {
    }
    removeItem(event:Event): void {
        event.preventDefault();
        this.cartService.removeFromCart(this.item)
        this.cartPage.updateTotalPrice();
        this.cartPage.updateTotalItemAmount()
        this.cdr.markForCheck();
    }
    incrementAmount(): void {
        this.cartService.incrementItemAmount(this.item);
        this.cartPage.updateTotalPrice();
        this.cartPage.updateTotalItemAmount()
        this.cdr.markForCheck();
    }
    decrementAmount(): void {
        this.cartService.decrementItemAmount(this.item);
        this.cartPage.updateTotalPrice();
        this.cartPage.updateTotalItemAmount()
        this.cdr.markForCheck();
    }
}
