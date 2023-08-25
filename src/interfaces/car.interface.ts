export interface Car {
  name: string;
  color: string;
  gas: "gasoline" | "electric";
  price: number;
  year: number;
  description: string;
  created_at: Date;
  updated_at: Date;
}
