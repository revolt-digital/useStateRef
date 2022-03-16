## Custom hook for react: useStateRef

### Install

```yarn add @revolt-digital/use-state-ref```

### How to use it?

```
import React from 'react';
import useStateRef from '@revolt-digital/use-state-ref';

export default () => {
  const [state, stateRef, setState] = useStateRef(0);

    return <div>Hello there!</div>;
};
```
