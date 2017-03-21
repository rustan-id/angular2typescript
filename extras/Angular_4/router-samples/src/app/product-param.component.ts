import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  template: `<h1 class="product">Details for troduct {{productID}}</h1>`,
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponentParam {
  productID: number;

  constructor(route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];

    /*  An alternative way of receiving params via subscription

    this.route.params.subscribe(
     params => this.productID = params['id']
     );*/

  }
}