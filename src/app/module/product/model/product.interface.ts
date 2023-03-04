import { ProductRecord } from '../../../shared/model/product-record.interface';
import { Category } from '../../category/model/category.interface';

/**
 * Product database object model.
 */
export interface Product {
	/**
	 * Unique identifier for product
	 */
	id: number;
	/**
	 *  Name of the product
	 */
	name: string;
	/**
	 * Category information
	 */
	category: Partial<Category>;
	/**
	 * List of Product Record Model
	 */
	records: ProductRecord[];
	/**
	 * Creation date
	 */
	createdAt?: Date;
	/**
	 * Update date
	 */
	updatedAt?: Date;
	/**
	 * Destroy date
	 */
	deletedAt: Date | null;
}
