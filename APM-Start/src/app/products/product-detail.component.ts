import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  _id: number;

  pageTitle: 'Product Detail';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    /*
      The cast here could be made using a type constructor, as Number(), Boolean() or another one
      or using some shorthands, as plus sign before value to cast it to number.
    */
    this._id = +this.route.snapshot.queryParamMap.get('id');
  }

}
