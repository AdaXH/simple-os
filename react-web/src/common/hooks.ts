import { useEffect, useRef, useCallback } from 'react';

export function useDidMount(fn: (...args: any[]) => any): void {
  useEffect(fn, []);
}

export function useRefCallback<T extends (...arg: any[]) => any>(fn: T, deps: [any]): void {
  const ref: Ref<T> = useRef();
  useEffect(() => {
    ref.current = fn;
  }, deps);
  return useCallback(ref.current, [ref]);
}
