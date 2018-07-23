export interface Data {
  Employee: string;
  OrderDate: string;
  OrderNumber: number;
  SaleAmount: number;
  StoreCity: string;
  StoreState: string;
}

export interface DataSpi {
  totalCount: number;
  items: Data[];
}
