export interface FoodRecord {
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
   * Product record unique category identifier
   */
  category: number;
  /**
   * Product record unique market identifier
   */
  market: number;
}
