---
nav:
  title: Components
  path: /components
---

## Switch

Demo:

```tsx
import React, { useState } from 'react';
import { Switch } from 'axis-react-switch';

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="app">
      <Switch
        checked={value}
        onColor="#EF476F"
        onChange={() => setValue(!value)}
      />
    </div>
  );
}

export default App;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
