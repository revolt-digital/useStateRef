import { useState, useRef } from 'react';

export default (initialValue: any) => {
  const [state, setState] = useState(initialValue);
  const ref = useRef(state);

  return [
    state,
    ref.current,
    (value: any) => {
      ref.current = value;
      setState(value);
    }
  ];
};
