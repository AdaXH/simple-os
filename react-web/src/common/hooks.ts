import { useEffect } from 'react';

export function useDidMount(fn: (...args: any[]) => any): any {
  useEffect(fn, []);
}
