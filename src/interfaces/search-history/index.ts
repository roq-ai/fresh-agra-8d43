import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SearchHistoryInterface {
  id?: string;
  search_term: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SearchHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  search_term?: string;
  user_id?: string;
}
