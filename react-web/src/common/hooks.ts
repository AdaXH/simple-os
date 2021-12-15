import { useEffect, useRef, useCallback, createRef, useState } from 'react';

/**
 * didmount
 * @param fn
 */
export function useDidMount<T extends (...args: any[]) => any>(fn: T): void {
  useEffect(fn, []);
}

/**
 * usecallback
 * @param fn
 * @param deps
 * @returns
 */
export function useRefCallback<T extends (...arg: any[]) => any>(fn: T, deps: any[]): void {
  const ref: Ref<T> = useRef();
  useEffect(() => {
    ref.current = fn;
  }, deps);
  return useCallback(ref.current, [ref]);
}

/**
 * useInterval，定时器hooks
 * @param fn
 * @param timer
 */
export function useInterval<T extends (...args: any[]) => any>(fn: T, timer: number = 1000) {
  const ref: Ref<VoidFunction> = createRef();
  const [data, setData] = useState<Record<string, string>>({});
  ref.current = setInterval(() => {
    const res = fn();
    setData(res);
  }, timer);
  useEffect(() => {
    return () => clearInterval(ref.current);
  }, []);
  return [data];
}
