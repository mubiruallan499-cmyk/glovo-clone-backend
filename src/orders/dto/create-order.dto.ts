export class CreateOrderDto {
  vendorId: number; // which vendor this order is for
  items: {
    productId: number; // the product being ordered
    quantity: number;  // quantity of the product
  }[];
}
