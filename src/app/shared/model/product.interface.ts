import { ProductRecord } from "./product-record.interface";

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
   * List of Product Record Model
   */
  records: Partial<ProductRecord[]>;
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
