export function createOrder(payload) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload || !payload.items || payload.items.length === 0) {
        reject(new Error('Нельзя оформить пустой заказ'));
        return;
      }
      resolve({ orderId: Date.now() });
    }, 700);
  });
}
