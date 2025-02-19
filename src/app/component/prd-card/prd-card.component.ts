import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-prd-card',
  standalone: true,
  imports: [],
  templateUrl: './prd-card.component.html',
  styleUrl: './prd-card.component.scss'
})
export class PrdCardComponent {
  @Input() item:any;
}
