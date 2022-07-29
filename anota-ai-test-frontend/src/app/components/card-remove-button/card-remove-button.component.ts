import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-remove-button',
  templateUrl: './card-remove-button.component.html',
  styleUrls: ['./card-remove-button.component.css'],
})
export class CardRemoveButtonComponent implements OnInit {
  @Output() clickEventEmitter = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
