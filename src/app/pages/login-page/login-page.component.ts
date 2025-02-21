import { Component } from '@angular/core';
import {CartPrdCrdComponent} from "../../component/cart-prd-crd/cart-prd-crd.component";
import {CartRecommendComponent} from "../../component/cart-recommend/cart-recommend.component";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-login-page',
  standalone: true,
    imports: [
        CartPrdCrdComponent,
        CartRecommendComponent,
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        NgForOf
    ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
