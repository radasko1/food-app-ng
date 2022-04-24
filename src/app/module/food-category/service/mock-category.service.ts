import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { foodCategoryServerResponse } from '../../../shared/constant/category-response.constant';
import { FoodCategory } from '../model/food-category.interface';

@Injectable()
export class MockCategoryService {
  private readonly _categoryList: FoodCategory[] = foodCategoryServerResponse;

  /**
   * Get statically created list of food categories.
   * Contains only top level categories.
   * Simulation of server response to get first level categories objects from database.
   */
  // TODO: change to request from real server
  get categoryList(): Observable<FoodCategory[]> {
    return of(this._categoryList);
  }

  /**
   * Get statically created list of food category.
   * Contains category object with subcategories.
   * Simulation of server response to get subcategory by unique id from database.
   */
  // TODO: change to request from real server
  get category(): Observable<FoodCategory> {
    // create new flatten array only with subcategories
    const subcategories = this._categoryList.filter((c) => {
      return !!(c.children && c.children.length > 0);
    });

    // ugly mock solution, but ain't have time
    return of(subcategories[0]);
  }
}
