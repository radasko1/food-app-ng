import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { Product } from '../../../shared/model/product.interface';
import { Router } from '@angular/router';
import translation from './search.translation.json';
import { AutocompleteCompleteModel } from '../../../shared/model/autocomplete-complete.model';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
})
export class SearchComponent implements OnInit {
  searchText = '';
  searchResults: Product[] = [];
  products: Product[] = [];
  translation = translation;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.get().subscribe((c) => {
      this.products = c;
    });
  }

  /**
   * Search values suggest on written text in Autocomplete input element.
   * @param event
   */
  search(event: AutocompleteCompleteModel) {
    let filtered: Product[] = [];
    let query = event.query;

    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      if (product.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(product);
      }
    }

    this.searchResults = filtered;
  }

  /**
   * Navigate to the searched Product.
   *
   * When user click on searched Product in autocomplete input form element,
   * he is going to be redirected to the Product page, and text inside
   * input element will be cleared.
   *
   * @param value Selected option from Autocomplete component
   */
  select(value: Product) {
    this.searchText = '';
    this.router.navigate(['product', value.id]);
  }
}
