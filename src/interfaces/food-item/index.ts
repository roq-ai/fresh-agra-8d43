import { OrderItemInterface } from 'interfaces/order-item';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface FoodItemInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  order_item?: OrderItemInterface[];
  vendor?: VendorInterface;
  _count?: {
    order_item?: number;
  };
}

export interface FoodItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  vendor_id?: string;
}
