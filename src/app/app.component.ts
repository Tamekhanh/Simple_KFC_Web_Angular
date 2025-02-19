import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {CommonModule, NgFor, NgForOf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {SubNavbarComponent} from "./component/sub-navbar/sub-navbar.component";
import {CategoryChooseComponent} from "./component/category-choose/category-choose.component";
import {ContainerSubComponent} from "./component/container-sub/container-sub.component";
import {EndPageComponent} from "./component/end-page/end-page.component";
import {PrdCardComponent} from "./component/prd-card/prd-card.component";

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

  topFunction(): void {
    const container = document.getElementById("container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  categories = [
    {
      title: "HOT DEAL",
      id: '1',
      items: [
        {
          image: "menu/hot_deal/1.png",
          title: "BELOVED COMBO",
          base_price: "110.000",
          sale_price: "89.000",
          description: "2 Fried Chicken + 1 Popcorn Pasta",
          isCus: true
        }
      ]
    },
    {
      title:"NEW PRODUCT",
      id: '2',
      items: [
        {
          image: "menu/new_products/1.png",
          title: "Chizza",
          base_price: "45.000",
          sale_price: "",
          description: "1 Chizza",
          isCus: false
        },
        {
          image: "menu/new_products/2.png",
          title: "Combo HD Chizza A",
          base_price: "75.000",
          sale_price: "",
          description: "1 Chizza + 1 French Fries (R) + 1 Pepsi (L)",
          isCus: true
        },
        {
          image: "menu/new_products/3.png",
          title: "Combo HD Chizza B",
          base_price: "135.000",
          sale_price: "",
          description: "2 Chizza + 1 Fried Chicken + 2 Pepsi (L)",
          isCus: true
        }
      ]
    },
    {
      title:"COMBO FOR 1",
      id: '3',
      items:[
          {
            image: "menu/combo_1/1.png",
            title: "Combo Chicken 1",
            base_price: "59.000",
            sale_price: "",
            description: "1 Fried Chicken + 1 French Fries (R)/ Mashed Potato (R) & Coleslaw (R) + 1 Pepsi (L)",
            isCus: true
          },
    {
      image: "menu/combo_1/2.png",
      title: "Combo Chicken 2",
      base_price: "89.000",
      sale_price: "",
      description: "2 Fried Chicken + 1 French Fries (R)/ Mashed Potato (R) & Coleslaw (R) + 1 Pepsi (L)",
      isCus: true
    },
    {
      image: "menu/combo_1/3.png",
      title: "Combo Fillet",
      base_price: "84.000",
      sale_price: "",
      description: "1 Flava Fillet + 1 Salad Hat + 1 Lipton (L)",
      isCus: true
    },
    {
      image: "menu/combo_1/4.png",
      title: "Combo Burger Shrimp",
      base_price: "67.000",
      sale_price: "",
      description: "1 Burger Shrimp + 1 French Fries (R) + 1 Pepsi (L)",
      isCus: true
    },
    {
      image: "menu/combo_1/5.png",
      title: "Combo Burger Zinger",
      base_price: "77.000",
      sale_price: "",
      description: "1 Burger Zinger + 1 French Fries (R) + 1 Pepsi (L)",
      isCus: true
    },
    {
      image: "menu/combo_1/6.png",
      title: "Combo Burger Flava",
      base_price: "77.000",
      sale_price: "",
      description: "1 Burger Flava + 1 French Fries (R) + 1 Pepsi (L)",
      isCus: true
    },
    {
      image: "menu/combo_1/7.png",
      title: "Combo Popcorn Pasta",
      base_price: "47.000",
      sale_price: "",
      description: "1 Popcorn Pasta + 1 Pepsi (L)",
      isCus: true
    },
    {
      image: "menu/combo_1/8.png",
      title: "Combo Zinger Chicken Pasta",
      base_price: "47.000",
      sale_price: "",
      description: "1 Zinger Pasta + 1 Pepsi (L)",
      isCus: true
    },
  ]
},
    {
      title:"COMBO FOR SHARING",
      id: '4',
      items: [
        {
          image: "menu/combo_sharing/1.png",
          title: "Combo Group 2",
          base_price: "127.000",
          sale_price: "",
          description: "2 Fried Chicken + 1 Burger Zinger + 2 Pepsi (L)",
          isCus: true
        },
        {
          image: "menu/combo_sharing/2.png",
          title: "Combo Group 3",
          base_price: "160.000",
          sale_price: "",
          description: "3 Fried Chicken + 1 Pasta Popcorn + 1 French Fries (R) + 2 Pepsi (L)",
          isCus: true
        },
        {
          image: "menu/combo_sharing/3.png",
          title: "Combo Group 4",
          base_price: "167.000",
          sale_price: "",
          description: "4 Fried Chicken + 1 Wedges (R) + 2 Pepsi (L)",
          isCus: true
        },
        {
          image: "menu/combo_sharing/4.png",
          title: "Combo Group 5",
          base_price: "160.000",
          sale_price: "",
          description: "5 Fried Chicken + 1 French Fries (R) + 3 Pepsi (L)",
          isCus: true
        },
        {
          image: "menu/combo_sharing/5.png",
          title: "Combo Group 6",
          base_price: "275.000",
          sale_price: "",
          description: "6 Fried Chicken + 1 Popcorn Pasta + 1 Wedges (R) + 4 Pepsi (L)",
          isCus: true
        },
        {
          image: "menu/combo_sharing/6.png",
          title: "Combo Nanban Pop Rice HDB",
          base_price: "189.000",
          sale_price: "",
          description: "01 Nanban Pop Rice + 03 COBs + 01 FF R/ 01 (CL+MP) R + 02 Pepsi Can",
          isCus: true
        },
      ]
    },

    {
      title:"FRIED & ROASTED",
      id: '5',
       items: [
        {
          image: "menu/fried_roasted/1.png",
          title: "1 Fried Chicken",
          base_price: "35.000",
          sale_price: "",
          description: "1 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
          image: "menu/fried_roasted/2.png",
          title: "2 Fried Chicken",
          base_price: "70.000",
          sale_price: "",
          description: "2 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
          image: "menu/fried_roasted/3.png",
          title: "3 Fried Chicken",
          base_price: "104.000",
          sale_price: "",
          description: "3 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
          image: "menu/fried_roasted/4.png",
          title: "6 Fried Chicken",
          base_price: "204.000",
          sale_price: "",
          description: "6 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
          image: "menu/fried_roasted/5.png",
          title: "1 Roasted Fillet",
          base_price: "39.000",
          sale_price: "",
          description: "1 Flava Roast Fillet / 1 Pc Black Pepper Fillet",
          isCus: true
        },
        {
          image: "menu/fried_roasted/6.png",
          title: "Hot Wings 3 Pcs",
          base_price: "54.000",
          sale_price: "",
          description: "Hot Wings 3 Pcs",
          isCus: false
        },
        {
          image: "menu/fried_roasted/7.png",
          title: "Hot Wings 5 Pcs",
          base_price: "85.000",
          sale_price: "",
          description: "Hot Wings 5 Pcs",
          isCus: false
        },
        {
          image: "menu/fried_roasted/8.png",
          title: "Popcorn (R)",
          base_price: "38.000",
          sale_price: "",
          description: "Popcorn (R)",
          isCus: false
        },
      ]
    },
    {
      title:"RICE - BURGER - PASTA",
      id: '6',
      items: [
        {
          image: "menu/RBP/1.png",
          title: "Burger Zinger",
          base_price: "54.000",
          sale_price: "",
          description: "1 Burger Zinger",
          isCus: true
        },
        {
          image: "menu/RBP/2.png",
          title: "Burger Shrimp",
          base_price: "45.000",
          sale_price: "",
          description: "1 Burger Shrimp",
          isCus: true
        },
        {
          image: "menu/RBP/3.png",
          title: "Burger Flava",
          base_price: "54.000",
          sale_price: "",
          description: "1 Burger Flava",
          isCus: true
        },
        {
          image: "menu/RBP/4.png",
          title: "Teriyaki Rice",
          base_price: "45.000",
          sale_price: "",
          description: "1 Teriyaki Rice",
          isCus: true
        },
        {
          image: "menu/RBP/6.png",
          title: "Fried Chicken Rice",
          base_price: "54.000",
          sale_price: "",
          description: "1 Fried Chicken Rice",
          isCus: true
        },
        {
          image: "menu/RBP/7.png",
          title: "Rice",
          base_price: "12.000",
          sale_price: "",
          description: "Rice",
          isCus: false
        },
        {
          image: "menu/RBP/8.png",
          title: "Popcorn Pasta",
          base_price: "40.000",
          sale_price: "",
          description: "1 Popcorn Pasta",
          isCus: false
        },
      ]
    },

    {
      title: "SNACK",
      id: '7',
      items: [
        {
          image: "menu/snack/1.png",
          title: "Salad Hat",
          base_price: "38.000",
          sale_price: "",
          description: "1 Salad Hat",
          isCus: false
        },
        {
          image: "menu/snack/2.png",
          title: "Salad Pop",
          base_price: "45.000",
          sale_price: "",
          description: "1 Salad Popcorn",
          isCus: false
        },
        {
          image: "menu/snack/3.png",
          title: "3 Fishsticks",
          base_price: "40.000",
          sale_price: "",
          description: "3 Fishsticks",
          isCus: false
        },
        {
          image: "menu/snack/4.png",
          title: "4 Chewy Cheese",
          base_price: "36.000",
          sale_price: "",
          description: "4 Chewy Cheese",
          isCus: false
        },
        {
          image: "menu/snack/5.png",
          title: "6 Chewy Cheese",
          base_price: "49.000",
          sale_price: "",
          description: "6 Chewy Cheese",
          isCus: false
        }
      ]
    },

    {
      title: "DESSERT & DRINK",
      id: '8',
       items: [
        {
          image: "menu/d_d/1.png",
          title: "1 Eggtart",
          base_price: "18.000",
          sale_price: "",
          description: "1 Eggtart",
          isCus: false
        },
        {
          image: "menu/d_d/2.png",
          title: "4 Eggtarts",
          base_price: "58.000",
          sale_price: "",
          description: "4 Eggtarts",
          isCus: false
        },
        {
          image: "menu/d_d/3.png",
          title: "2 Golden Lava Taro",
          base_price: "26.000",
          sale_price: "",
          description: "2 Golden Lava Taro",
          isCus: false
        },
        {
          image: "menu/d_d/4.png",
          title: "3 Golden Lava Taro",
          base_price: "34.000",
          sale_price: "",
          description: "3 Golden Lava Taro",
          isCus: false
        },
        {
          image: "menu/d_d/5.png",
          title: "5 Golden Lava Taro",
          base_price: "54.000",
          sale_price: "",
          description: "5 Golden Lava Taro",
          isCus: false
        },
        {
          image: "menu/d_d/6.png",
          title: "2 Pumcheese",
          base_price: "29.000",
          sale_price: "",
          description: "2 Pumcheese",
          isCus: false
        }
      ]
    }
  ]

}