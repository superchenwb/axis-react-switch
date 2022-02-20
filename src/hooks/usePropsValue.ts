import { useRef } from 'react';
import { useMemoizedFn, useUpdate } from 'ahooks';

const isEmpty = (obj: any) => Object.keys(obj).length === 0 && obj.constructor === Object;
const isObj = (val: unknown): val is object => val != null && typeof val === 'object';

type Options<T> = {
  value?: T;
  defaultValue?: T;
  onChange?: (v: T) => void;
};

export function usePropsValue<T>(
  options: Options<T>,
  transformer?: { to: (v: any) => any; from: (v: any) => any },
) {
  const { value, defaultValue, onChange } = options;

  const update = useUpdate();

  const stateRef = useRef<T>(transformer ? transformer.to(defaultValue) : defaultValue);
  if (isObj(value) ? !isEmpty(value) : value !== undefined) {
    stateRef.current = transformer ? transformer.to(value) : value;
  }

  const setState = useMemoizedFn((v: T) => {
    if (value === undefined) {
      stateRef.current = transformer ? transformer.to(v) : v;
      update();
    }
    onChange?.(transformer ? transformer.from(v) : v);
  });
  return [stateRef.current, setState] as const;
}
