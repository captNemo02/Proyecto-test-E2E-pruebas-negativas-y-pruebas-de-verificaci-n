ESTRUCTURA DADA POR CHATGPT(SUJETO A CAMBIOS DEPENDIENDO COMO AVANZA PROYECTO)

project/
├─ playwright.config.ts
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ .gitignore
├─ .env                      # opcional (si guardas URLs/credenciales)
├─ README.md                 # cómo correr, cómo está organizado

├─ tests/                    # SOLO tests (archivos .spec.ts)
│  ├─ e2e/
│  │  ├─ purchase-flow.spec.ts
│  │  └─ smoke.spec.ts
│  ├─ auth/
│  │  ├─ login.spec.ts
│  │  └─ logout.spec.ts
│  ├─ cart/
│  │  ├─ add-remove-items.spec.ts
│  │  └─ empty-cart.spec.ts
│  ├─ checkout/
│  │  ├─ form-validations.spec.ts
│  │  └─ checkout-success.spec.ts
│  └─ api/                   # opcional si también haces tests de API
│     └─ auth-api.spec.ts

├─ pages/                    # Page Objects (NO .spec.ts, solo .ts)
│  ├─ login.page.ts
│  ├─ inventory.page.ts
│  ├─ cart.page.ts
│  ├─ checkout.page.ts
│  └─ checkout-overview.page.ts

├─ fixtures/                 # “cosas reutilizables” para tests
│  ├─ test-fixtures.ts        # si creas fixtures custom (opcional)
│  └─ storage/               # estados guardados de login (opcional)
│     └─ standard-user.json

├─ data/                     # datos de prueba centralizados
│  ├─ users.ts
│  ├─ products.ts
│  └─ checkout-data.ts

├─ utils/                    # helpers genéricos (no de una página)
│  ├─ selectors.ts           # opcional si centralizas selectores globales
│  ├─ assertions.ts          # helpers de asserts comunes (opcional)
│  ├─ random.ts              # generar datos (opcional)
│  └─ logger.ts              # logging (opcional)

├─ constants/                # valores fijos (opcional)
│  ├─ urls.ts
│  └─ timeouts.ts

├─ reports/                  # si exportas cosas manualmente (opcional)
│  └─ ...

└─ test-results/             # lo genera Playwright (no editar)
