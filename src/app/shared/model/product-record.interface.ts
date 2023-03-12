import { Market } from './market.interface';
import { ProductRecordForm } from "./product-record-form.interface";

export interface ProductRecord extends ProductRecordForm {
	/** Product Model ID */
	productId: number;
	/** Market Model ID */
	marketId: number;
	/** Part of Market Model */
	market: Partial<Market>;
	/** Creation date */
	createdAt?: Date;
	/** Update date */
	updatedAt?: Date;
  /** Destroy date */
	deletedAt?: Date | null;
  /** Product ratio in table */
  ratio?: number;
}
