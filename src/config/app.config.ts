interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Manager'],
  tenantName: 'Vendor',
  applicationName: 'fresh agra',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View all information about a Vendor',
    'Search for Vendors',
    'View all the food items a Vendor is selling',
    'Place an order for food items from a Vendor',
  ],
  ownerAbilities: [
    'Manage Vendor',
    'Invite Manager to Vendor',
    "Manage Vendor's food offerings",
    'View all orders placed with Vendor',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f13ab90d-22dd-49b5-b4b7-2f9b9a556772',
};
