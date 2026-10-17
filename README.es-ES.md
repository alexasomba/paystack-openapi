[English](README.md) · [Español](README.es-ES.md) · [Français](README.fr-FR.md)

# Especificación OpenAPI de Paystack

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

La especificación OpenAPI para la [API de Paystack](https://paystack.com/docs/api).

## Primeros pasos

La [especificación OpenAPI](https://swagger.io/specification/) ofrece una alternativa más para probar la API de Paystack.
Puedes descargar la especificación y utilizarla en:

- [SwaggerHub](https://swagger.io/tools/swaggerhub/)
- [OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)

## Configuración local

- Clona el repositorio
  ```sh
  git clone git@github.com:alexasomba/paystack-openapi.git
  ```
- Accede al proyecto clonado e instala las dependencias
  ```sh
  cd paystack-openapi
  vp install
  ```
- Inicia el servidor para ver la especificación en tu navegador
  ```sh
  vp run dev
  ```
  > [!NOTA]

> Por el momento, el archivo `paystack.yaml` es la única especificación que se abre automáticamente en el navegador. Si la especificación no se abre de forma automática, puedes abrir manualmente el archivo http://localhost:7070 en tu navegador.

## Componentes

En este repositorio hay dos carpetas principales de interés:

- `src`: Contiene los recursos (assets), scripts y un archivo .html básico para trabajar con la especificación OpenAPI (OAS) y visualizarla.
- `assets`: Contiene los archivos OAS de Paystack:
- `base`: Archivo OAS monolítico (`paystack.yaml`) utilizado como base para la división.
- `openapi`: Contiene las partes individuales y manejables del OAS.
- `sdk`: Es un archivo de especificación único utilizado para la generación de bibliotecas cliente. Contiene los parámetros necesarios para nuestras bibliotecas cliente.
- `use_cases`: Es una colección de especificaciones que contienen API para casos de uso comunes de la API de Paystack (por ejemplo, `wallet.yaml`, `betting.yaml`). Se utilizan para crear las colecciones en nuestro [espacio de trabajo de Postman](https://www.postman.com/paystack-developers?tab=collections).
- `dist`: Contiene los archivos de especificación OpenAPI agrupados (por ejemplo, `paystack.yaml`, `betting.yaml`) generados a partir de `src`.

## SDK

Este repositorio también contiene SDK en TypeScript generados a partir de la especificación OpenAPI en `src/assets/sdk/paystack.yaml`.

### Node (servidor)

- Paquete: `@alexasomba/paystack-node`

```ts
import { createPaystack } from "@alexasomba/paystack-node";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});

const { data, error } = await paystack.transaction_initialize({
  body: { email: "customer@example.com", amount: 5000 },
});

if (error) throw error;
```

### Axios (servidor)

- Paquete: `@alexasomba/paystack-axios`

```ts
import { createPaystack } from "@alexasomba/paystack-axios";

const paystack = createPaystack({
  secretKey: process.env.PAYSTACK_SECRET_KEY!,
});

const { data, error } = await paystack.transaction_initialize({
  body: { email: "customer@example.com", amount: 5000 },
});

if (error) throw error;
```

### Navegador

- Paquete: `@alexasomba/paystack-browser`

```ts
import { createPaystackClient } from "@alexasomba/paystack-browser";

const paystack = createPaystackClient({
  apiKey: "YOUR_API_KEY",
});

const { data, error } = await paystack.POST("/transaction/initialize", {
  body: { email: "customer@example.com", amount: 5000 },
});

if (error) throw error;
```

### Integrado (JS/TS)

- Paquete: `@alexasomba/paystack-inline`

```ts
import { createPaystackInline } from "@alexasomba/paystack-inline";

const paystack = createPaystackInline({
  publicKey: "YOUR_PUBLIC_KEY",
});

paystack.setup({
  email: "customer@example.com",
  amount: 5000,
  onSuccess: (transaction) => {
    console.log("Payment successful", transaction);
  },
});
```

### Compilación local

```sh
vp run sdk:build
```

### Sincronización y preparación para el lanzamiento

El flujo previsto para el lanzamiento del SDK es el siguiente:

La fuente OpenAPI se integra en el código fuente generado del SDK, pasa a los repositorios divididos (split repos) y, finalmente, se convierte en paquetes publicados.

1. Actualiza la fuente OpenAPI en `src/assets/openapi` o la proyección del SDK en `src/assets/sdk/paystack.yaml`.
2. Valida la especificación mediante `vp run validate`.
3. Regenera o compila el código fuente del SDK utilizando `vp run sdk:build` y los generadores específicos para cada lenguaje, según sea necesario.
4. Ejecuta `vp run sdk:check:release` para verificar que los metadatos del código fuente del SDK, los metadatos de los repositorios divididos, las versiones de npm, los enlaces en los archivos README y las especificaciones incluidas estén actualizados.
5. Sincroniza el resultado generado del SDK mediante `vp run sdk:sync:local` para realizar una verificación local; posteriormente, utiliza `vp run sdk:sync:all` cuando todo esté listo para enviar los cambios a los repositorios divididos. 6. Envía la etiqueta correspondiente (`v*`) a los repositorios de código fuente y a los repositorios de SDKs separados; luego, crea o actualiza las «Releases» de GitHub utilizando `vp run sdk:release:github -- v1.10.7`.
6. Publica las versiones de los paquetes desde los repositorios de SDKs separados, una vez que el código fuente generado se haya sincronizado y se hayan actualizado las versiones de los paquetes. Los repositorios de SDKs para TypeScript se publican en npm a través de `.github/workflows/publish-npm.yml` mediante la funcionalidad «Trusted Publisher» de npm, por lo que no es necesario incluir un token de npm en GitHub Actions.

### Otros lenguajes (generados)

Los siguientes SDKs se generan mediante OpenAPI Generator y se encuentran en el directorio `sdks/`:

- Python: `sdks/python`
- PHP: `sdks/php`
- Go: `sdks/go`

Para regenerarlos, utiliza:

```sh
vp run sdk:others:generate
```

Cada carpeta contiene su propio archivo README con instrucciones de uso e instalación específicas para cada lenguaje.

### Packagist (PHP)

Packagist (público) requiere un repositorio VCS en el que el archivo `composer.json` del paquete se encuentre en la raíz del repositorio. Dado que este repositorio es un «monorepo» y el SDK de PHP reside en `sdks/php`, la publicación en Packagist se gestiona separando `sdks/php` en su propio repositorio independiente.

- El repositorio dedicado al SDK de PHP es `alexasomba/paystack-php`.
- El flujo de lanzamiento habitual sincroniza el código fuente de PHP generado y las etiquetas (tags) de lanzamiento correspondientes con `alexasomba/paystack-php`.
- Packagist solo requiere el repositorio separado y sus etiquetas. Utilice el flujo de trabajo `Register package on Packagist` manualmente si es necesario crear o actualizar el paquete.
- Configure `PACKAGIST_TOKEN` y, en caso de que el token no se encuentre ya en el formato `username:token`, utilice `PACKAGIST_USERNAME` para el proceso de registro manual.

## Contribución

Estas son algunas de las formas en las que puede contribuir a este repositorio:

- Crear un caso de uso
- Informar de un problema (abrir un «issue»)
- Sugerir una mejora

## Problemas

Puede [abrir un «issue»](https://github.com/alexasomba/paystack-openapi/issues) si encuentra algún error o tiene dificultades al utilizar este repositorio.

## Licencia

Este repositorio está disponible bajo la licencia MIT. Consulte el archivo [LICENSE](https://github.com/alexasomba/paystack-openapi/blob/main/LICENSE) para obtener más información.

## Sincronización segura de SDK

Previsualice el plan completo mediante `vp run sdk:sync:local -- --dry-run`. Cada destino seleccionado debe ser, de antemano, un repositorio Git limpio e independiente; si un destino presenta cambios pendientes («sucio»), el plan completo se abortará antes de realizar cualquier modificación. Tanto la sincronización local como la remota crean una rama de revisión (`codex/sdk-sync-*`), conservan los metadatos de Git y los directorios de compilación o estado, y rechazan la operación si ya existe una rama de sincronización previa. Utilice `--destination PATH`, `--sdk NAME` o `--branch codex/NAME` para definir un alcance específico. La sincronización remota realiza un _commit_ del árbol sincronizado y envía (_push_) únicamente dicha rama de revisión; no realiza operaciones de _pull_, fusión (_merge_), modificaciones en la rama principal (_main_) ni creación de etiquetas de lanzamiento (_release tags_). Revise cualquier eliminación indicada en la simulación (_dry-run_) antes de aplicar los cambios.

La imagen del generador para Go/PHP/Python está fijada en la versión v7.19.0 para garantizar la reproducibilidad en futuras generaciones; los resultados existentes mantienen su procedencia original (vinculada a una versión específica del generador) hasta que se realice una regeneración verificada por separado. Las pruebas de los _scripts_ emplean el ejecutor de pruebas de Node (`vp run test:scripts`), mientras que las pruebas del SDK utilizan Vitest (`vp test run`).
