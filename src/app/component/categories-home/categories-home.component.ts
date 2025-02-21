import {Component, Input, input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-categories-home',
  standalone: true,
    imports: [
        MatIcon,RouterLink
    ],
  templateUrl: './categories-home.component.html',
  styleUrl: './categories-home.component.scss'
})
export class CategoriesHomeComponent {
  @Input() categories: any;
}
