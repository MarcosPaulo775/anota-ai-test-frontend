import { NgModule } from '@angular/core';
import { ItemTypePipe } from './pipes/item-type.pipe';

@NgModule({
  declarations: [ItemTypePipe],
  exports: [ItemTypePipe],
})
export class SharedModule {}
