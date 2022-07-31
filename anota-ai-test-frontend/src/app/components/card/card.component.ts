import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/shared/models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item!: Item;
  @Output() clickEventEmitter = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  remove() {
    this.clickEventEmitter.emit();
  }
}
