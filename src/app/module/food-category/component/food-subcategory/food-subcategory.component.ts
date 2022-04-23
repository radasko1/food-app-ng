import { Component, OnInit } from '@angular/core';
import { FoodCategory } from "../../model/food-category.interface";
import { Observable, of } from "rxjs";
import { MockCategoryService } from "../../service/mock-category.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-food-subcategory',
  templateUrl: './food-subcategory.component.html',
  styleUrls: ['./food-subcategory.component.scss'],
})
export class FoodSubcategoryComponent implements OnInit {
  category: Observable<FoodCategory> = of();

  constructor(private categoryService: MockCategoryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.category = this.categoryService.category;
    console.log(this.route.snapshot.params);
  }
}
