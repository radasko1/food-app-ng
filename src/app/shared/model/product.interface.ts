import { ProductRecord } from './product-record.interface';
import { ProductForm } from './product-form.interface';
import { Category } from '../../module/category/model/category.interface';

/**
 * Product database object model.
 */
export interface Product extends ProductForm {
	/** Unique identifier for product */
	id: number;
	/** List of Product Record Model */
  productRecordsRel: ProductRecord[];
  /** Category relation */
  categoryRel: Partial<Category>;
}
