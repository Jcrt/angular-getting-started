import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, onErrorResumeNext, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = 'api/products/products.json';

  constructor(private httpClient: HttpClient) {

  }

  // tslint:disable-next-line: typedef
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error was occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(this.productUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getProductById(id: number): IProduct {
    let product: IProduct;
    this.getProducts().subscribe({
      next: x => product = x.find(y => y.productId === id),
      error: err => new Error(`Product is not found: ${err}`)
    });
    return product;
  }
}
