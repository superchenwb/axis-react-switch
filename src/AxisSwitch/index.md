---
nav:
  title: Components
  path: /components
---

## Switch

Demo:

```tsx
import React, { useState } from 'react';
import { AxisSwitch } from 'axis-react-switch';

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="app">
      <AxisSwitch
        
        onColor="#EF476F"
      />
    </div>
  );
}

export default App;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
