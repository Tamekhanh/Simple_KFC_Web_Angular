import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-category-choose',
  standalone: true,
  imports: [],
  templateUrl: './category-choose.component.html',
  styleUrl: './category-choose.component.scss'
})
export class CategoryChooseComponent {
  @Input() category: any;
  clickscrollx(direction: 'left' | 'right'):void {
    console.log('click scrollx');
    const scrollContainer = document.querySelector('.cate-chose-ls') as HTMLElement;
    if (!scrollContainer) return;

    const scrollAmount = 300;
    if (direction === 'left') {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
  clickscrollcontaint(id: string): void {
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ inline: "start", behavior: 'smooth' });
    }
  }

  protected readonly toString = toString;
}






