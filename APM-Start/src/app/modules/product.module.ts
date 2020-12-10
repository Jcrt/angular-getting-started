import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';

import { ProductListComponent } from '../products/product-list/product-list.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';

import { ConvertToSpacePipe } from '../shared/pipes/convert-to-space.pipe';

import { ProductDetailGuard } from '../products/product-detail/product-detail.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        { path: 'products', component: ProductListComponent },
        {
          path: 'products/:id',
          component: ProductDetailComponent,
          canActivate: [ProductDetailGuard]
        },
      ]
    )
  ]
})
export class ProductModule { }
