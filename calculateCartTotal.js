function calculateCartTotal(items, taxRate) {
  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity * (1 - item.discount / 100);
  }, 0);

  const finalTotal = subtotal * (1 + taxRate / 100);

  return Number(finalTotal.toFixed(2));
}