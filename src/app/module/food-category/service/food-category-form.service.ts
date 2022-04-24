import { Injectable } from '@angular/core';

@Injectable()
export class FoodCategoryFormService {
  private parentCategoryId: string | null = null;

  getCategoryId(): string | null {
    return this.parentCategoryId;
  }

  setCategoryId(id: string | null) {
    this.parentCategoryId = id;
  }
}
