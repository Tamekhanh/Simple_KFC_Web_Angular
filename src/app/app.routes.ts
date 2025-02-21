import { Routes } from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {CartPageComponent} from "./pages/cart-page/cart-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DetailPageComponent} from "./pages/detail-page/detail-page.component";
import {FindKfcPageComponent} from "./pages/find-kfc-page/find-kfc-page.component";
import {BookPartyPageComponent} from "./pages/book-party-page/book-party-page.component";

export const routes: Routes = [
    {
        path: 'deal',
        component: ProductPageComponent
    },
    {
        path: 'cart',
        component: CartPageComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'detail/:id',
        component: DetailPageComponent
    },
    {
        path: 'find',
        component: FindKfcPageComponent
    },
    {
        path: 'party',
        component: BookPartyPageComponent
    }
];
