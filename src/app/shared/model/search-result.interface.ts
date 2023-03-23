import { Category } from '../../module/category/model/category.interface';
import { Product } from './product.interface';

/**
 * Search API endpoint response.
 */
export interface SearchResult {
	category: Category[];
	product: Product[];
}
