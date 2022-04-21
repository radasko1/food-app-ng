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
   * Image path for the category
   * Available from two option, image souce URL or Base64 hash
   */
  imageSource?: string;
  /**
   * Subcategories, if there are any
   */
  children?: FoodCategory[];
}
