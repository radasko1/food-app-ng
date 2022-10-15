import { Category } from '../../module/category/model/category.interface';
import { Product } from '../../module/product/model/product.interface';

/**
 * Search API endpoint response.
 */
export interface SearchResult {
	category: Category[];
	product: Product[];
}
