import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppService } from './core/app.service';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { CardRemoveButtonComponent } from './components/card-remove-button/card-remove-button.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    CardRemoveButtonComponent,
    CardCategoryComponent,
    SearchInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
