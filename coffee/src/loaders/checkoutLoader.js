import { redirect } from 'react-router-dom';
import { useStore } from '../store/index.js';

export function checkoutLoader() {
  const user = useStore.getState().auth.user;
  if (!user) return redirect('/login');
  return null;
}
