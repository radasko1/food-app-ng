import { Product } from "../../../shared/model/product.interface";

export interface ProductList {
  [key: string]: Product[];
}
