/**
 * Represents food category object
 */
export interface FoodCategory {
  /**
   * Unique identifier for category
   */
  id: string;
  /**
   *  Name of the category
   */
  name: string;
  /**
   * CSS class for category icon
   */
  iconClass?: string;
  /**
   * Subcategories, if there are any
   */
  children?: FoodCategory[];
}
