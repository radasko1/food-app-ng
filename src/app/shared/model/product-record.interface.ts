export interface ProductRecord {
  /**
   * Food record uniquer identifier.
   * There is no place to use this value yet.
   * Optional property.
   */
  id?: number;
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
  date?: Date;
  /**
   * Product record unique Product identifier
   */
  product: number;
  /**
   * Product record unique market identifier
   */
  marketId: number;
  /**
   * Name of Market.
   * Used in API providing list of Product records.
   */
  market?: string;
}
