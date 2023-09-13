import { FoodItemInterface } from 'interfaces/food-item';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface OrderItemInterface {
  id?: string;
  quantity: number;
  food_item_id: string;
  order_id: string;
  created_at?: any;
  updated_at?: any;

  food_item?: FoodItemInterface;
  order?: OrderInterface;
  _count?: {};
}

export interface OrderItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  food_item_id?: string;
  order_id?: string;
}
