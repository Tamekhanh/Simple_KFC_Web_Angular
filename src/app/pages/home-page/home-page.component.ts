import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import {ProductService} from "../../services/product-service/product.service";
import {CategoriesHomeComponent} from "../../component/categories-home/categories-home.component";
import {NgFor} from "@angular/common";
@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        MatIconModule,
        CategoriesHomeComponent,
        NgFor
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

    categories: any[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.categories = this.productService.categories;
    }
}
