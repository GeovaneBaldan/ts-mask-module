# Mask Module

This module provides a scalable and extensible structure for formatting, unformatting (unmasking), validating, and registering data masks (like CPF, phone numbers, dates, etc), with multi-country (`locale`) support.

---

## 📦 Folder Structure

```
/services/masks
│
├── /masks          # Mask implementations by country
│   ├── /br
│   └── /us
│
├── /validators     # Validators by country
│   ├── /br
│   └── /us
│
├── /register       # Registration functions per country
│   ├── registerBR.ts
│   └── registerUS.ts
│
├── types.ts        # Interfaces and types (Mask, Validator, Locale, MaskType)
├── maskManager.ts  # Singleton manager for all mask logic
├── init.ts         # Central initialization/registration
└── README.md       # This file
```

---

## ✅ Registering Masks

Each country has its own registration file, e.g.:

```ts
// registerBR.ts
import { MaskManager } from "../maskManager";
import { CPFMask } from "../masks/br/cpfMask";
import { BRPhoneMask } from "../masks/br/phoneMask";
import { DateMask } from "../masks/br/dateMask";

import { CPFValidator } from "../validators/br/cpfValidator";
import { BRPhoneValidator } from "../validators/br/phoneValidator";
import { DateValidator } from "../validators/br/dateValidator";

export function registerBRMasks() {
  MaskManager.register("pt-BR", "cpf", new CPFMask(), new CPFValidator());
  MaskManager.register(
    "pt-BR",
    "phone",
    new BRPhoneMask(),
    new BRPhoneValidator()
  );
  MaskManager.register("pt-BR", "date", new DateMask(), new DateValidator());
}
```

In `init.ts`, import and call these registration functions:

```ts
// init.ts
import { registerBRMasks } from "./register/registerBR";
import { registerUSMasks } from "./register/registerUS";

export function initializeMasks() {
  registerBRMasks();
  registerUSMasks();
}
```

---

## 🧠 Using the `MaskManager`

```ts
import { MaskManager } from "./maskManager";
import { MaskType } from "./types";

// Formatting
MaskManager.format("pt-BR", MaskType.CPF, "12345678901"); // '123.456.789-01'

// Unmasking
MaskManager.unmask("pt-BR", MaskType.CPF, "123.456.789-01"); // '12345678901'

// Validating
MaskManager.validate("pt-BR", MaskType.CPF, "123.456.789-01"); // true
```

---

## 🧪 Running Tests

Unit tests live under `tests/masks/` and `tests/validators/`, separated by type and locale.

Run with:

```bash
npm test
# or
yarn test
```

Example structure:

```
/tests
├── /masks
│   └── cpfMask.test.ts
├── /validators
│   └── cpfValidator.test.ts
```

---

## 🌍 Locale Support

Current supported locales:

| Country   | Locale |
| --------- | ------ |
| Brazil    | pt-BR  |
| USA       | en-US  |
| Argentina | es-AR  |
| Ecuador   | es-EC  |
| Mexico    | es-MX  |

To add a new country:

1. Create the mask and validator in `/masks/<locale>/` and `/validators/<locale>/`
2. Create `register<XX>.ts` in `/register`
3. Import and call it in `init.ts`

---

## 💡 Tip

You can auto-initialize masks in dev/test environments like this:

```ts
if (process.env.NODE_ENV !== "production") {
  initializeMasks();
}
```

---

Ready to grow with your project.
