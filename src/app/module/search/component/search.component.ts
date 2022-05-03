import { Component, OnInit } from '@angular/core';
import { CategoryApiService } from '../../../shared/service/category-api.service';
import { FoodCategory } from '../../../shared/model/food-category.interface';
import { Router } from '@angular/router';
import translation from './search.translation.json';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
})
export class SearchComponent implements OnInit {
  searchText: any;
  searchResults: any[] = [];
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

  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.categories.length; i++) {
      let category = this.categories[i];
      if (category.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(category);
      }
    }

    this.searchResults = filtered;
  }

  select(event: any) {
    this.searchText = '';
    this.router.navigate(['category', event.id]);
  }
}
