import { calculateTotalPrice, showCartWithTotalPrice } from './mercatrona';

describe('Mercatrona', () => {
  const items = [
    { name: 'Iceberg', price: 224, amount: 1 },
    { name: 'Tomate', price: 73, amount: 2 },
    { name: 'Chicken', price: 182, amount: 1 },
    { name: 'Bread', price: 88, amount: 1 },
    { name: 'Corn', price: 143, amount: 1 },
  ];

  it('should calculate the total price', () => {
    expect(calculateTotalPrice(items)).toBe(783);
  });

  it('should show names of product and total price', () => {
    expect(showCartWithTotalPrice(items)).toEqual({
      products: ['Iceberg', 'Tomate', 'Chicken', 'Bread', 'Corn'],
      totalPrice: 783,
    });
  });
});
