/** `GET /api/v1/public/t/:code`: what a guest sees after scanning a table's QR code. */
export default interface TableMenu {
  restaurant: { name: string; logo?: string };
  branch: { name: string };
  table: { name: string };
  categories: { _id: string; name: string }[];
  addonGroups: AddonGroup[];
  items: Dish[];
}

export interface AddonGroup {
  _id: string;
  name: string;
  min: number;
  max: number;
  options: { _id: string; name: string; price: number }[];
}

export interface Dish {
  _id: string;
  categoryId: string;
  name: string;
  description?: string;
  photo?: string;
  sizes: { _id: string; name: string; price: number }[];
  addonGroupIds: string[];
  soldOut: boolean;
}

/** One line of a guest's cart: a dish as picked (size, add-ons, note) and how many. */
export interface CartLine {
  key: string;
  itemId: string;
  name: string;
  sizeId: string;
  sizeName?: string;
  addonIds: string[];
  addonNames: string[];
  note?: string;
  unitPrice: number;
  qty: number;
}
