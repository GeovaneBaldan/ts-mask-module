# Mask Module

This module provides a scalable and extensible structure for formatting, unformatting (unmasking), validating, and registering data masks such as CPF, phone numbers, dates, and more — with multi-country (locale) support.

## ✨ Features

- 📦 Modular design for registering new mask types
- 🌍 Locale-aware formatting and validation
- 🧹 Format and unformat (mask/unmask) functionality
- ✅ Built-in validators for common data types (e.g. CPF, CNPJ, phone)
- 🔧 Easily extensible for custom formats and rules
- 💯 Written in TypeScript with full type safety

## 📁 Project Structure
The codebase follows a modular architecture organized by locale and responsibility, making it easy to add or modify masks and validators independently.

```
src/
├── base/                     # Base classes and utilities
│   ├── BaseMask.ts
│   ├── BaseValidator.ts
│   └── maskUtils.ts
├── data/                     # Raw patterns, maps and constants
│   ├── iePatterns.ts
│   └── ieRegex.ts
├── locales/                  # All locale-specific implementations
│   └── br/                   # Example: Brazil
│       ├── masks/            # Masks for CPF, CNPJ, dates, etc.
│       ├── validators/       # Validators for Brazilian data
│       └── registerMasks.ts  # Central registration per locale
├── enums.ts                  # Global enums (MaskType, Locale, etc.)
├── types.ts                  # Shared types
├── MaskModule.ts             # Central mask registry and loader
└── index.ts                  # Entry point
```

### ⚠️ Special Case: StateRegistrationMask
The State Registration (Inscrição Estadual) mask and validator require an additional UF (state code) to function correctly.
Because of this, they are not registered in the centralized `MaskModule`, as the registry assumes masks are locale + type only.

To use them, instantiate them directly:

```ts
import { StateRegistrationMask } from 'MaskModule/locales/br/masks/StateRegistrationMask'

const mask = new StateRegistrationMask('SP')
mask.format('110042490114')
```

## 🧪 Running Tests
This project uses unit tests written in TypeScript. Test files are located in:

`__tests__/` – General utility tests (e.g., maskUtils.test.ts)

`src/locales/<locale>/__tests__/` – Locale-specific tests for masks and validators (e.g., Brazilian masks)

To run the tests, use [pnpm](https://pnpm.io):

```bash
pnpm run test
```

Other test-related scripts:
```bash
pnpm run test:watch     # Run tests in watch mode

pnpm run test:coverage  # Generate test coverage report
```

## 🌐 Locale Support

Current supported locales:

| Country   | Locale |
| --------- | ------ |
| Brazil    | pt-BR  |
| USA       | en-US  |
| Argentina | es-AR  |

To add a new country:

1. Create the mask and validator in `/masks/<locale>/` and `/validators/<locale>/`

## 🤝 Contributing

Suggestions, bug reports, and implementation ideas are welcome!
Feel free to open an issue or start a discussion via the [GitHub Issues](https://github.com/GeovaneBaldan/ts-mask-module/issues) tab.
