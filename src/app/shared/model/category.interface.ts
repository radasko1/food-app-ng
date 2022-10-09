/**
 * Category database object model.
 */
export interface Category {
  /**
   * Unique identifier for product
   */
  id: number;
  /**
   *  Name of the product
   */
  name: string;
  /**
   * Parent category ID.
   */
  parentId: number;
  /**
   * Subcategory list.
   */
  subcategory: Category[];
  /**
   * Creation date.
   */
  createdAt?: Date;
  /**
   * Update date.
   */
  updatedAt?: Date;
  /**
   * Destroy date.
   */
  deletedAt: Date | null;
}
