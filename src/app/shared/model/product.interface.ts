import { ProductRecord } from "./product-record.interface";

/**
 * Represents Product object
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
   * List of records.
   */
  records?: ProductRecord[];
}
