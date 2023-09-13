const mapping: Record<string, string> = {
  'food-items': 'food_item',
  orders: 'order',
  'order-items': 'order_item',
  'search-histories': 'search_history',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
