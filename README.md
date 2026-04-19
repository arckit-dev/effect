# @arckit/effect

Effect Schema utilities for domain modeling with branded types.

[![npm version](https://img.shields.io/npm/v/@arckit/effect)](https://www.npmjs.com/package/@arckit/effect)
[![CI](https://github.com/arckit-dev/effect/actions/workflows/feature-branch.yml/badge.svg)](https://github.com/arckit-dev/effect/actions/workflows/feature-branch.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Effect](https://img.shields.io/badge/Effect-3-black)](https://effect.website/)

## 📑 Table of Contents

- 🪧 [About](#about)
- 📦 [Installation](#installation)
- 🚀 [Usage](#usage)
- 📖 [API](#api)
- 🤗 [Contributing](#contributing)
- 📝 [License](#license)

<h2 id="about">🪧 About</h2>

Factory function for creating domain models backed by [Effect Schema](https://effect.website/docs/schema/introduction). Produces callable model constructors with embedded schema validation and optional input transformation.

<h2 id="installation">📦 Installation</h2>

```bash
pnpm add @arckit/effect
```

<h2 id="usage">🚀 Usage</h2>

```typescript
import { defineModel } from '@arckit/effect';
import { Schema } from 'effect';

const Firstname = defineModel(
  Schema.NonEmptyTrimmedString,
  (input) => input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
);

const firstname = Firstname('jean'); // 'Jean' (branded NonEmptyTrimmedString)
```

Use `Model.TypeOf` and `Model.EncodedOf` to extract types:

```typescript
type FirstnameType = Model.TypeOf<typeof Firstname>;    // branded string
type FirstnameInput = Model.EncodedOf<typeof Firstname>; // string
```

Access the underlying schema for validation:

```typescript
const validation = Schema.Struct({
  firstname: Firstname.schema
});
```

<h2 id="api">📖 API</h2>

### `defineModel<S>(schema, transform?) => Model<S>`

| Parameter | Description |
|-----------|-------------|
| `schema` | An Effect `Schema.Schema` defining the domain type |
| `transform` | Optional function to transform the input before decoding (e.g., normalize casing) |

Returns a `Model<S>` — a callable that decodes input through the schema, with a `.schema` property for validation use.

### `Model.TypeOf<M>`

Extracts the decoded type from a model (the branded/refined type).

### `Model.EncodedOf<M>`

Extracts the encoded type from a model (the raw input type).

<h2 id="contributing">🤗 Contributing</h2>

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

<h2 id="license">📝 License</h2>

[MIT](LICENSE) &copy; Marc Gavanier
