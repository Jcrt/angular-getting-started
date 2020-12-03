import { Component, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  rating: 4;
  starWidth: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
