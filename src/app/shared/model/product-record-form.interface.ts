export interface ProductRecordForm {
  /** Product identifier */
  productId: number;
  /** Price of product */
  price: number;
  /**
   * Date when was product bought.
   * Needs to be in ISO format pass into server via POST request.
   */
  date: Date;
  /** Product weight */
  weight: number | null;
  /** Market Model ID */
  marketId: number;
}
