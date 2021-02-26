---
title: For angular users
sidebar_label: For angular users
---

**Please include the following NPM packages:**

```bash
process, buffer
```

And add the following code into polyfills.ts

```javascript
import * as process from 'process';
window['process'] = process;
(window as any).global = window;
(window as any).global.Buffer = (window as any).global.Buffer || require('buffer').Buffer;
```
