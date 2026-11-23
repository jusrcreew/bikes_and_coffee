import { useRef } from 'react';

export function useRenderCount(name) {
  const count = useRef(0);
  count.current += 1;
  console.log(`[render] ${name}: ${count.current}`);
  return count.current;
}
