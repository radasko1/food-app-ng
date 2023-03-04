import { Market } from './market.interface';

export interface ProductRecord {
	/**
	 * Food record uniquer identifier.
	 * There is no place to use this value yet.
	 */
	id: number;
	/** Price of product */
	price: number;
	/**
	 * Date when was product bought.
	 * Needs to be in ISO format pass into server via POST request.
	 */
	date: Date;
  /** Product weight */
  weight: number;
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
	deletedAt: Date | null;
  /** Product ratio in table */
  ratio?: number;
}
