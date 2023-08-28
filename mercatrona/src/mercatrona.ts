type Item = {
  price: number;
  amount: number;
  name: string;
};

export const calculateTotalPrice = (items: Item[]) =>
  items.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.amount * currentValue.price,
    0,
  );

export const showCartWithTotalPrice = (items: Item[]) => ({
  products: items.map((value) => value.name),
  totalPrice: calculateTotalPrice(items),
});
