/**
 * List of app routes.
 */
export class AppRoutes {
	/** Product Module */
	public static readonly PRODUCT = 'product';
  // @route PRODUCT_DETAIL
	public static readonly PRODUCT_DETAIL = ':id/detail';
	/** Category Module */
  // @route CATEGORY
	public static readonly CATEGORY = 'category';
	public static readonly CATEGORY_DETAIL = ':id/detail';
	/** Form Module */
	public static readonly FORM = 'form';
	public static readonly FORM_PRODUCT_RECORD = 'product-record';
	public static readonly FORM_CATEGORY = 'category/new';
	public static readonly FORM_PRODUCT = 'product/new';
}
