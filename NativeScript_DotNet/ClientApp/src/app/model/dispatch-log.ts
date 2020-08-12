import { Product } from './product';

export interface DispatchLog {
  customerNumber: string;
  requestedDate?: Date;
status: string;
sopNumber: string;
products: Product[];
}
