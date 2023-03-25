export interface ProductRecordForm {
  productId: number;
  price: number;
  date: Date;
  weight: number | null;
  marketId: number;
  description: string | null;
}
