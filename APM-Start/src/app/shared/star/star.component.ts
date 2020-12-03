import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core'

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()
  rating: number;

  @Output()
  ratingClicked = new EventEmitter<string>();

  starWidth: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
