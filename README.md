# Mask Module

This module provides a scalable and extensible structure for formatting, unformatting (unmasking), validating, and registering data masks such as CPF, phone numbers, dates, and more — with multi-country (locale) support.

## ✨ Features

- 📦 Modular design for registering new mask types
- 🌍 Locale-aware formatting and validation
- 🧹 Format and unformat (mask/unmask) functionality
- ✅ Built-in validators for common data types (e.g. CPF, CNPJ, phone)
- 🔧 Easily extensible for custom formats and rules
- 💯 Written in TypeScript with full type safety

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
