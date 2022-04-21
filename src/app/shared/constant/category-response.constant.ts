import { FoodCategory } from '../../module/food-category/model/food-category.interface';

/**
 * Statically created data as preview of server response with food category collection.
 * For demo usage when API is not finished yet.
 */
export const foodCategoryServerResponse: FoodCategory[] = [
  { id: 'faer-8846', name: 'Ovoce' },
  { id: 'edfo-1124', name: 'Zelenina' },
  {
    id: 'cvbf-9924',
    name: 'Mléčné výrobky',
    children: [
      { id: 'jefj-4741', name: 'Mléko' },
      { id: 'qpkd-7542', name: 'Jogurt' },
    ],
  },
];
