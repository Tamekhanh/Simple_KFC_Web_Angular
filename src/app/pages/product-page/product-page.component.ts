import { Component } from '@angular/core';
import {SubNavbarComponent} from "../../component/sub-navbar/sub-navbar.component";
import {CategoryChooseComponent} from "../../component/category-choose/category-choose.component";
import {ProductService} from "../../services/product-service/product.service";
import {ContainerSubComponent} from "../../component/container-sub/container-sub.component";
import {NgFor} from "@angular/common";
@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    SubNavbarComponent,
    CategoryChooseComponent,
    ContainerSubComponent,
      NgFor,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  constructor(public producService: ProductService) {
  }


}
