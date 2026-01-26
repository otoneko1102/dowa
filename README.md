# dowa

冷笑（嘲笑）を簡易に検知する小さなユーティリティです。

## インストール

```bash
npm install dowa
```

## 使い方

```js
// ESM
import { findAll, contains } from 'dowa';
// CJS
const { findAll, contains } = require('dowa');

findAll('←うおw、爆笑'); // => ['うおw', '爆笑']
contains('うおw'); // => true
// relaxed モード(検知範囲を拡大)
contains('どわー', true);
```

## API

- `findAll(text: string, relaxed = false): string[] | null` — マッチした冷笑の配列を返す（見つからなければ `null`）。
- `contains(text: string, relaxed = false): boolean` — 冷笑が含まれるかを真偽値で返す。
