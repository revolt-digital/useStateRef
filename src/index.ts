import { useState, useRef } from 'react';

type HookReturn = [
  any,
  (value: any) => void,
  any
];

export default (initialValue: any): HookReturn => {
  const [state, setState] = useState(initialValue);
  const [prev, setPrev] = useState(undefined);
  const ref = useRef(state);

  return [
    ref,
    (value: any) => {
      setPrev(ref.current);
      ref.current = value;
      setState(value);
    },
    prev
  ];
};
