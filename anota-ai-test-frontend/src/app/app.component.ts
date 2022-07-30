import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AppService } from './core/app.service';
import { Item } from './shared/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'anota-ai-test-frontend';

  list?: Item[];
  data?: Item[];

  searchInput = new FormControl<string>('', { nonNullable: true });

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getList().subscribe((data) => {
      this.data = [...data];
      this.list = [...data];
    });
  }

  ngAfterViewInit(): void {
    this.filter();
  }

  remove(id: number) {
    const index = this.list?.findIndex((el) => el.id === id);

    if (index !== undefined && index !== -1) {
      this.list?.splice(index, 1);
    }
  }

  filter() {
    this.searchInput.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => {
        if (this.data) {
          this.list = this.data.filter(
            (el) => el.title.includes(value) || el.description.includes(value)
          );
        }
      });
  }
}
