import {Component, Input} from '@angular/core';
import {CartService} from "../../services/cart-service/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prd-card',
  standalone: true,
  imports: [],
  templateUrl: './prd-card.component.html',
  styleUrl: './prd-card.component.scss'
})
export class PrdCardComponent {
  @Input() item:any;

  constructor(public cartService: CartService, public router: Router) { }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  navigateToDetail() {
    this.router.navigate(['/detail', this.item.id]);
  }

}
