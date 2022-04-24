import { FoodCategory } from '../../module/food-category/model/food-category.interface';

/**
 * Statically created data as preview of server response with food category collection.
 * Contains only list of categories and their subcategories.
 * There are no products in this collection.
 * For demo usage when API is not finished yet.
 */
export const foodCategoryServerResponse: FoodCategory[] = [
  {
    id: 'faer-8846',
    name: 'Ovoce',
    iconClass: 'ico-fruit',
    children: [
      { id: 'rfpd-3658', name: 'Jablko' },
      { id: 'okfw-6652', name: 'Hrozno' },
      { id: 'qwel-0954', name: 'Pomeranč' },
      { id: 'cehf-0584', name: 'Mandarinka' },
    ],
  },
  { id: 'edfo-1124', name: 'Zelenina', iconClass: 'ico-vegetable' },
  {
    id: 'cvbf-9924',
    name: 'Mléčné výrobky',
    iconClass: 'ico-milk',
    children: [
      { id: 'jefj-4741', name: 'Mléko' },
      { id: 'qpkd-7542', name: 'Jogurt' },
      { id: 'ruwh-0502', name: 'Tvaroh' },
    ],
  },
  { id: 'tuhe-8035', name: 'Pečivo', iconClass: 'ico-bread' },
];
