export function createBooking(payload) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload || !payload.items || payload.items.length === 0) {
        reject(new Error('Нельзя отправить пустую заявку'));
        return;
      }
      resolve({ bookingId: Date.now() });
    }, 700);
  });
}
