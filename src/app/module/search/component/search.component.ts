import { Component, OnInit } from '@angular/core';
import { CategoryApiService } from '../../../shared/service/category-api.service';
import { FoodCategory } from '../../../shared/model/food-category.interface';
import { Router } from '@angular/router';
import translation from './search.translation.json';
import { AutocompleteCompleteModel } from '../../../shared/model/autocomplete-complete.model';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
})
export class SearchComponent implements OnInit {
  searchText = '';
  searchResults: FoodCategory[] = [];
  categories: FoodCategory[] = [];
  translation = translation;

  constructor(
    private categoryApiService: CategoryApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryApiService.get().subscribe((c) => {
      this.categories = c;
    });
  }

  /**
   * Search values suggest on written text in Autocomplete input element.
   * @param event
   */
  search(event: AutocompleteCompleteModel) {
    let filtered: FoodCategory[] = [];
    let query = event.query;

    for (let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];
      if (category.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(category);
      }
    }

    this.searchResults = filtered;
  }

  /**
   * Navigate to the searched category detail.
   *
   * When user click on searched category in autocomplete input form element,
   * he is going to be redirected to the category detail page, and text inside
   * input element will be cleared.
   *
   * @param value Selected option from Autocomplete component
   */
  select(value: FoodCategory) {
    this.searchText = '';
    this.router.navigate(['category', value.id]);
  }
}
