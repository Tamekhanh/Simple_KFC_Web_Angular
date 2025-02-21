import { Injectable } from '@angular/core';
import {productModel} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  categories: productModel[] = [
    {
      title: "HOT DEAL",
      id: 1,
      image: "categories-banner/1.png",
      items: [
        {
          id: 1,
          image: "menu/hot_deal/1.png",
          title: "BELOVED COMBO",
          base_price: 110,
          sale_price: 89,
          description: "2 Fried Chicken + 1 Popcorn Pasta",
          isCus: true
        }
      ]
    },
    {
      title:"NEW PRODUCT",
      id: 2,
      image: "categories-banner/2.png",
      items: [
        {
          id: 2,
          image: "menu/new_products/1.png",
          title: "Chizza",
          base_price: 45,
          sale_price: 0,
          description: "1 Chizza",
          isCus: false
        },
        {
          id: 3,
          image: "menu/new_products/2.png",
          title: "Combo HD Chizza A",
          base_price: 75,
          sale_price: 0,
          description: "1 Chizza + 1 French Fries (R) + 1 Pepsi (L)",
          isCus: true
        },
        {
          id: 4,
          image: "menu/new_products/3.png",
          title: "Combo HD Chizza B",
          base_price: 135,
          sale_price: 0,
          description: "2 Chizza + 1 Fried Chicken + 2 Pepsi (L)",
          isCus: true
        }
      ]
    },
    {
      title:"COMBO FOR 1",
      id: 3,
      image: "categories-banner/3.png",
      items:[
        {
          id: 5,
          image: "menu/combo_1/1.png",
          title: "Combo Chicken 1",
          base_price: 59,
          sale_price: 0,
          description: "1 Fried Chicken + 1 French Fries (R)/ Mashed Potato (R) & Coleslaw (R) + 1 Pepsi (L)",
          isCus: true
        },
        {
          id: 6,
          image: "menu/combo_1/2.png",
          title: "Combo Chicken 2",
          base_price: 89,
          sale_price: 0,
          description: "2 Fried Chicken + 1 French Fries (R)/ Mashed Potato (R) & Coleslaw (R) + 1 Pepsi (L)",
          isCus: true
        },
        {
          id: 7,
          image: "menu/combo_1/3.png",
          title: "Combo Fillet",
          base_price: 84,
          sale_price: 0,
          description: "1 Flava Fillet + 1 Salad Hat + 1 Lipton (L)",
          isCus: true
        },
        {
          id: 8,
          image: "menu/combo_1/4.png",
          title: "Combo Burger Shrimp",
          base_price: 67,
          sale_price: 0,
          description: "1 Burger Shrimp + 1 French Fries (R) + 1 Pepsi (L)",
          isCus: true
        },
        {
          id: 9,
          image: "menu/combo_1/5.png",
          title: "Combo Burger Zinger",
          base_price: 77,
          sale_price: 0,
          description: "1 Burger Zinger + 1 French Fries (R) + 1 Pepsi (L)",
          isCus: true
        },
        {
          id: 10,
          image: "menu/combo_1/6.png",
          title: "Combo Burger Flava",
          base_price: 77,
          sale_price: 0,
          description: "1 Burger Flava + 1 French Fries (R) + 1 Pepsi (L)",
          isCus: true
        },
        {
          id: 11,
          image: "menu/combo_1/7.png",
          title: "Combo Popcorn Pasta",
          base_price: 47,
          sale_price: 0,
          description: "1 Popcorn Pasta + 1 Pepsi (L)",
          isCus: true
        },
        {
          id: 12,
          image: "menu/combo_1/8.png",
          title: "Combo Zinger Chicken Pasta",
          base_price: 47,
          sale_price: 0,
          description: "1 Zinger Pasta + 1 Pepsi (L)",
          isCus: true
        },
      ]
    },
    {
      title:"COMBO FOR SHARING",
      id: 4,
      image: "categories-banner/4.png",
      items: [
        {
          id: 13,
          image: "menu/combo_sharing/1.png",
          title: "Combo Group 2",
          base_price: 127,
          sale_price: 0,
          description: "2 Fried Chicken + 1 Burger Zinger + 2 Pepsi (L)",
          isCus: true
        },
        {
          id: 14,
          image: "menu/combo_sharing/2.png",
          title: "Combo Group 3",
          base_price: 160,
          sale_price: 0,
          description: "3 Fried Chicken + 1 Pasta Popcorn + 1 French Fries (R) + 2 Pepsi (L)",
          isCus: true
        },
        {
          id: 15,
          image: "menu/combo_sharing/3.png",
          title: "Combo Group 4",
          base_price: 167,
          sale_price: 0,
          description: "4 Fried Chicken + 1 Wedges (R) + 2 Pepsi (L)",
          isCus: true
        },
        {
          id: 16,
          image: "menu/combo_sharing/4.png",
          title: "Combo Group 5",
          base_price: 160,
          sale_price: 0,
          description: "5 Fried Chicken + 1 French Fries (R) + 3 Pepsi (L)",
          isCus: true
        },
        {
          id: 17,
          image: "menu/combo_sharing/5.png",
          title: "Combo Group 6",
          base_price: 275,
          sale_price: 0,
          description: "6 Fried Chicken + 1 Popcorn Pasta + 1 Wedges (R) + 4 Pepsi (L)",
          isCus: true
        },
        {
          id: 18,
          image: "menu/combo_sharing/6.png",
          title: "Combo Nanban Pop Rice HDB",
          base_price: 189,
          sale_price: 0,
          description: "01 Nanban Pop Rice + 03 COBs + 01 FF R/ 01 (CL+MP) R + 02 Pepsi Can",
          isCus: true
        },
      ]
    },

    {
      title:"FRIED & ROASTED",
      id: 5,
      image: "categories-banner/5.png",
      items: [
        {
          id: 19,
          image: "menu/fried_roasted/1.png",
          title: "1 Fried Chicken",
          base_price: 35,
          sale_price: 0,
          description: "1 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
          id: 20,
          image: "menu/fried_roasted/2.png",
          title: "2 Fried Chicken",
          base_price: 70,
          sale_price: 0,
          description: "2 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
          id: 21,
          image: "menu/fried_roasted/3.png",
          title: "3 Fried Chicken",
          base_price: 104,
          sale_price: 0,
          description: "3 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
            id: 22,
          image: "menu/fried_roasted/4.png",
          title: "6 Fried Chicken",
          base_price: 204,
          sale_price: 0,
          description: "6 Hot & Spicy Chicken/Original Recipe Chicken/Non Spicy Crispy Chicken",
          isCus: true
        },
        {
          id: 23,
          image: "menu/fried_roasted/5.png",
          title: "1 Roasted Fillet",
          base_price: 39,
          sale_price: 0,
          description: "1 Flava Roast Fillet / 1 Pc Black Pepper Fillet",
          isCus: true
        },
        {
          id: 24,
          image: "menu/fried_roasted/6.png",
          title: "Hot Wings 3 Pcs",
          base_price: 54,
          sale_price: 0,
          description: "Hot Wings 3 Pcs",
          isCus: false
        },
        {
          id: 24,
          image: "menu/fried_roasted/7.png",
          title: "Hot Wings 5 Pcs",
          base_price: 85,
          sale_price: 0,
          description: "Hot Wings 5 Pcs",
          isCus: false
        },
        {
          id: 25,
          image: "menu/fried_roasted/8.png",
          title: "Popcorn (R)",
          base_price: 38,
          sale_price: 0,
          description: "Popcorn (R)",
          isCus: false
        },
      ]
    },
    {
      title:"RICE - BURGER - PASTA",
      id: 6,
      image: "categories-banner/6.png",
      items: [
        {
          id: 26,
          image: "menu/RBP/1.png",
          title: "Burger Zinger",
          base_price: 54,
          sale_price: 0,
          description: "1 Burger Zinger",
          isCus: true
        },
        {
          id: 27,
          image: "menu/RBP/2.png",
          title: "Burger Shrimp",
          base_price: 45,
          sale_price: 0,
          description: "1 Burger Shrimp",
          isCus: true
        },
        {
          id: 28,
          image: "menu/RBP/3.png",
          title: "Burger Flava",
          base_price: 54,
          sale_price: 0,
          description: "1 Burger Flava",
          isCus: true
        },
        {
          id: 29,
          image: "menu/RBP/4.png",
          title: "Teriyaki Rice",
          base_price: 45,
          sale_price: 0,
          description: "1 Teriyaki Rice",
          isCus: true
        },
        {
          id: 30,
          image: "menu/RBP/6.png",
          title: "Fried Chicken Rice",
          base_price: 54,
          sale_price: 0,
          description: "1 Fried Chicken Rice",
          isCus: true
        },
        {
            id: 31,
          image: "menu/RBP/7.png",
          title: "Rice",
          base_price: 12,
          sale_price: 0,
          description: "Rice",
          isCus: false
        },
        {
          id: 32,
          image: "menu/RBP/8.png",
          title: "Popcorn Pasta",
          base_price: 40,
          sale_price: 0,
          description: "1 Popcorn Pasta",
          isCus: false
        },
      ]
    },

    {
      title: "SNACK",
      id: 7,
      image: "categories-banner/7.png",
      items: [
        {
          id: 33,
          image: "menu/snack/1.png",
          title: "Salad Hat",
          base_price: 38,
          sale_price: 0,
          description: "1 Salad Hat",
          isCus: false
        },
        {
          id: 34,
          image: "menu/snack/2.png",
          title: "Salad Pop",
          base_price: 45,
          sale_price: 0,
          description: "1 Salad Popcorn",
          isCus: false
        },
        {
          id: 35,
          image: "menu/snack/3.png",
          title: "3 Fishsticks",
          base_price: 40,
          sale_price: 0,
          description: "3 Fishsticks",
          isCus: false
        },
        {
          id: 36,
          image: "menu/snack/4.png",
          title: "4 Chewy Cheese",
          base_price: 36,
          sale_price: 0,
          description: "4 Chewy Cheese",
          isCus: false
        },
        {
          id: 37,
          image: "menu/snack/5.png",
          title: "6 Chewy Cheese",
          base_price: 49,
          sale_price: 0,
          description: "6 Chewy Cheese",
          isCus: false
        }
      ]
    },

    {
      title: "DESSERT & DRINK",
      id: 8,
      image: "categories-banner/8.png",
      items: [
        {
          id: 38,
          image: "menu/d_d/1.png",
          title: "1 Eggtart",
          base_price: 18,
          sale_price: 0,
          description: "1 Eggtart",
          isCus: false
        },
        {
          id: 39,
          image: "menu/d_d/2.png",
          title: "4 Eggtarts",
          base_price: 58,
          sale_price: 0,
          description: "4 Eggtarts",
          isCus: false
        },
        {
          id: 40,
          image: "menu/d_d/3.png",
          title: "2 Golden Lava Taro",
          base_price: 26,
          sale_price: 0,
          description: "2 Golden Lava Taro",
          isCus: false
        },
        {
          id: 41,
          image: "menu/d_d/4.png",
          title: "3 Golden Lava Taro",
          base_price: 34,
          sale_price: 0,
          description: "3 Golden Lava Taro",
          isCus: false
        },
        {
          id: 42,
          image: "menu/d_d/5.png",
          title: "5 Golden Lava Taro",
          base_price: 54,
          sale_price: 0,
          description: "5 Golden Lava Taro",
          isCus: false
        },
        {
          id: 43,
          image: "menu/d_d/6.png",
          title: "2 Pumcheese",
          base_price: 29,
          sale_price: 0,
          description: "2 Pumcheese",
          isCus: false
        }
      ]
    }
  ]
  getProductById(id: string): any {
    for (const category of this.categories) {
      const product = category.items.find(item => item.id === parseInt(id));
      if (product) {
        return (product);
      }
    }
    return null;
  }
}
