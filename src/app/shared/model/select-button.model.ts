/**
 * Select Button Model
 * SelectButton component definition interface of options from PrimeNG library.
 * Interface for SelectButton is not defined in the origin,
 * therefore I made my own interface.
 *
 * Take care of what SelectButton component accept for "optionLabel" and "optionValue" names.
 * In the default names for label and value are different.
 * For more information check official documentation.
 *
 * @link https://www.primefaces.org/primeng/selectbutton
 */
export interface SelectButtonModel {
  /**
   * Unique identifier for option value.
   */
  id: string;
  /**
   * Name for option label.
   */
  name: string;
  /**
   * If option is disabled.
   */
  inactive?: boolean;
}
