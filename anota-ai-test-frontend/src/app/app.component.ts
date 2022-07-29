import { Component, OnInit } from '@angular/core';
import { AppService } from './core/app.service';
import { Item } from './shared/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'anota-ai-test-frontend';

  list?: Item[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getList().subscribe((data) => {
      this.list = data;
    });
  }
}
