import { Product } from "./product.interface";
import { Market } from "./market.interface";

export interface ProductRecord {
  /**
   * Food record uniquer identifier.
   * There is no place to use this value yet.
   */
  id: number;
  /**
   * Product name
   */
  name: string;
  /**
   * Price of product
   */
  price: number;
  /**
   * Date when was product bought.
   * Needs to be in ISO format pass into server via POST request.
   */
  date: Date;
  /**
   * Product Model ID
   */
  productId: number;
  /**
   * Part of Product Model
   */
  product: Partial<Product>;
  /**
   * Market Model ID
   */
  marketId: number;
  /**
   * Part of Market Model
   */
  market: Partial<Market>;
  /**
   * Order Model ID
   */
  orderId: number;
  /**
   * Part of Order Model
   */
  order: Partial<any>;
  /**
   * Creation date.
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
