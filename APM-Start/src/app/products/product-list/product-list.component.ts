import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  constructor(
    private productService: ProductService
  ) {
    this.imageMargin = 2;
    this.imageWidth = 50;
    this.showImage = false;
  }

  _listFilter: string;

  errorMessage: '';
  pageTitle = 'Product List';
  imageWidth: number;
  imageMargin: number;
  showImage: boolean;

  filteredProducts: IProduct[];

  products: IProduct[];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      item => item.productName.toLocaleLowerCase()
        .indexOf(filterBy) !== - 1
    );
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => this.setProducts(products),
      error: err => this.errorMessage = err
    });
  }

  setProducts(products: IProduct[]): void {
    this.products = products;
    this.filteredProducts = this.products;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
  }
}
