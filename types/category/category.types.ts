export interface CategoryItem {
  id: string;
  name: string;
  subcategories: string[];
  productCount: number;
  status: "Active" | "Hidden";
}