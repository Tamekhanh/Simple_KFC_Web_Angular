import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {CommonModule, NgFor, NgForOf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {SubNavbarComponent} from "./component/sub-navbar/sub-navbar.component";
import {CategoryChooseComponent} from "./component/category-choose/category-choose.component";
import {ContainerSubComponent} from "./component/container-sub/container-sub.component";
import {EndPageComponent} from "./component/end-page/end-page.component";
import {PrdCardComponent} from "./component/prd-card/prd-card.component";
import {productModel} from "./models/product.model";
import {ScrollService} from "./services/scroll-service/scroll.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarComponent,
    SubNavbarComponent,
    CategoryChooseComponent,
    ContainerSubComponent,
    EndPageComponent,
    PrdCardComponent,
      NgForOf,
      NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'angular-demo2';
  constructor(public  scrollService: ScrollService) {
  }
  topFunction() {
    this.scrollService.topFunction();
  }

}