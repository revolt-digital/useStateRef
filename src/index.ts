import { useState, useRef } from 'react';

type Value = any;
type Return = [Value, (value: Value) => void, Value];

export default (initialValue: Value): Return => {
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
