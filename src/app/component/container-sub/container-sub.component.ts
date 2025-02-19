import {Component, Input} from '@angular/core';
import {PrdCardComponent} from "../prd-card/prd-card.component";
import {NgFor} from "@angular/common";


@Component({
  selector: 'app-container-sub',
  standalone: true,
  templateUrl: './container-sub.component.html',
  imports: [
    PrdCardComponent,
      NgFor,
  ],
  styleUrl: './container-sub.component.scss'
})
export class ContainerSubComponent {
  @Input() title: string="";
  @Input() items!: any[];
}
