import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css'],
})
export class CardCategoryComponent implements OnInit {
  @Input() type!: '1' | '2' | '3';

  constructor() {}

  ngOnInit() {}
}
