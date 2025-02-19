import { Component } from '@angular/core';

@Component({
  selector: 'app-category-choose',
  standalone: true,
  imports: [],
  templateUrl: './category-choose.component.html',
  styleUrl: './category-choose.component.scss'
})
export class CategoryChooseComponent {


}

const navbar_list = document.querySelector(".cate-chose-ls") as HTMLElement;

function clickscrollx(a: string): void {
  console.log("scroll to " + a);
  const scrollto = navbar_list.querySelector(`.${a}`) as HTMLElement;
  if (scrollto) {
    scrollto.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    console.error("Element not found: " + a);
  }
}
(window as any).clickscrollx = clickscrollx;




