import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ConvertToSpacePipe } from './shared/pipes/convert-to-space.pipe';
import { StarComponent } from './shared/star/star.component';
import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
