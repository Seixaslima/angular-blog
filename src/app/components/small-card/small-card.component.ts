import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  imageURL: string = "https://i1.wp.com/gelatologia.com/wp-content/uploads/2020/07/placeholder.png?ssl=1"
  @Input()
  cardTitle:string = "Novo pokemon é descoberto"

}
