import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  _id: number;

  pageTitle = 'Product Detail: ';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    /*
      The cast here could be made using a type constructor, as Number(), Boolean() or another one
      or using some shorthands, as plus sign before value to cast it to number.
    */
    this._id = +this.route.snapshot.queryParamMap.get('id');
    this.product = {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    };

    this.pageTitle += `${this._id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
