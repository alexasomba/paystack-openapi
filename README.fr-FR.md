[English](README.md) · [Español](README.es-ES.md) · [Français](README.fr-FR.md)

# Spécification OpenAPI Paystack

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

La spécification OpenAPI pour [API Paystack](https://paystack.com/docs/api).


## Pour commencer

La [spécification OpenAPI](https://swagger.io/specification/) fournit une autre alternative pour tester l'API Paystack.
Vous pouvez télécharger la spécification et l'utiliser sur :

- [SwaggerHub](https://swagger.io/tools/swaggerhub/)
- [Éditeur OpenAPI (Swagger)](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi)


## Configurer localement

- Cloner le dépôt
  ```sh
  git clone git@github.com:alexasomba/paystack-openapi.git
  ```
- Accédez au projet cloné et installez les dépendances
  ```sh
  cd paystack-openapi
  vp install
  ```
- Démarrez le serveur pour afficher les spécifications dans votre navigateur
  ```sh
  vp run dev
  ```
 > [!NOTE]
> Pour le moment, le fichier `paystack.yaml` est la seule spécification qui s'ouvre automatiquement dans votre navigateur. Si la spécification ne s'ouvre pas automatiquement dans votre navigateur, vous pouvez ouvrir manuellement http://localhost:7070 dans votre navigateur.


## Composants

Il y a deux dossiers d'intérêt de niveau supérieur dans ce dépôt :

- `src` : contient les actifs, les scripts et le .html de base pour travailler et afficher le fichier de spécification OpenAPI (OAS).
- `assets` : Ceci contient les fichiers Paystack OAS :
- `base` : fichier OAS monolithique (`paystack.yaml`) utilisé comme source de fractionnement.
- `openapi` : contient les parties individuelles et gérables de l'OAS.
- `sdk` : il s'agit d'une spécification de fichier unique utilisée pour la génération de bibliothèque client. Il contient juste assez de paramètres pour nos bibliothèques clientes.
- `use_cases` : il s'agit d'un ensemble de spécifications contenant des API pour les cas d'utilisation courants de l'API Paystack (par exemple, `wallet.yaml`, `betting.yaml`). Ceux-ci sont utilisés pour créer les collections dans notre [Espace de travail Postman](https://www.postman.com/paystack-developers?tab=collections).
- `dist` : contient les fichiers de spécifications OpenAPI groupés (par exemple, `paystack.yaml`, `betting.yaml`) générés à partir de `src`.


## SDK

Ce référentiel contient également des SDK TypeScript générés à partir de la spécification OpenAPI dans `src/assets/sdk/paystack.yaml`.


### Node (serveur)

- Contenu : `@alexasomba/paystack-node`.

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


### Axios (serveur)

- Contenu : `@alexasomba/paystack-axios`.

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


### Navigateur

- Contenu : `@alexasomba/paystack-browser`.

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


### En ligne (JS/TS)

- Colis : `@alexasomba/paystack-inline`.

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


### Construire localement

```sh
vp run sdk:build
```


### Synchronisation et préparation à la publication

Le chemin de version attendu du SDK est :

La source OpenAPI circule dans la source du SDK générée, puis dans les dépôts fractionnés et enfin dans les packages publiés.

1. Mettez à jour la source OpenAPI dans `src/assets/openapi` ou la projection SDK dans `src/assets/sdk/paystack.yaml`.
2. Validez la spécification avec `vp run validate`.
3. Régénérez/créez les sources du SDK avec `vp run sdk:build` et des générateurs spécifiques au langage si nécessaire.
4. Exécutez `vp run sdk:check:release` pour confirmer que les métadonnées sources du SDK, les métadonnées du dépôt fractionné, les versions npm, les liens README et les spécifications fournies ne sont pas obsolètes.
5. Synchronisez la sortie du SDK générée avec `vp run sdk:sync:local` pour une vérification locale, puis avec `vp run sdk:sync:all` lorsque vous êtes prêt à envoyer les dépôts fractionnés.
6. Poussez la balise `v*` correspondante vers la source et divisez les dépôts du SDK, puis créez ou actualisez les versions GitHub avec `vp run sdk:release:github -- v1.10.7`.
7. Publiez les versions du package à partir des dépôts du SDK fractionné une fois que la source générée a été synchronisée et que les versions du package ont été modifiées. Les dépôts du SDK TypeScript sont publiés sur npm via `.github/workflows/publish-npm.yml` à l'aide de npm Trusted Publisher, donc aucun jeton npm n'est requis dans les actions GitHub.


### Autres langues (générées)

Les SDK suivants sont générés via OpenAPI Generator et se trouvent dans le répertoire `sdks/` :

- Python : `sdks/python`
- PHP : `sdks/php`
- Allez : `sdks/go`

Régénérez-les avec :

```sh
vp run sdk:others:generate
```

Chaque dossier contient son propre README avec des instructions d'utilisation et d'installation spécifiques à la langue.


### Packagiste (PHP)

Packagist (public) attend un référentiel VCS dans lequel le `composer.json` du package se trouve à la racine du référentiel. Étant donné que ce référentiel est un monorepo et que le SDK PHP réside dans `sdks/php`, la publication sur Packagist est gérée en divisant `sdks/php` dans son propre référentiel.

- Le référentiel SDK PHP dédié est `alexasomba/paystack-php`.
- Le flux de version normal synchronise la source PHP générée et les balises de version correspondantes avec `alexasomba/paystack-php`.
- Packagist n'a besoin que du dépôt divisé et de ses balises. Utilisez le workflow `Register package on Packagist` manuellement si le package doit être créé ou actualisé.
- Configurez `PACKAGIST_TOKEN` et, lorsque le jeton n'est pas déjà sous la forme `username:token`, `PACKAGIST_USERNAME` pour le workflow d'enregistrement manuel.


## Contribuer

Voici quelques-unes des façons de contribuer à ce référentiel :

- Créer un cas d'utilisation
- Soulever un problème
- Proposer une amélioration


## Problèmes

Vous pouvez [ouvrir un problème](https://github.com/alexasomba/paystack-openapi/issues) si vous découvrez un bug ou rencontrez des problèmes lors de l'utilisation de ce dépôt.


## Licence

Ce référentiel est mis à disposition sous la licence MIT. Veuillez lire le fichier [LICENSE](https://github.com/alexasomba/paystack-openapi/blob/main/LICENSE) pour plus d'informations.


## Synchronisation sécurisée du SDK

Prévisualisez le plan complet avec `vp run sdk:sync:local -- --dry-run`. Chaque destination sélectionnée doit déjà être une extraction Git propre et indépendante ; une cible sale abandonne l'ensemble du plan avant que la cible ne change. La synchronisation locale et distante crée une branche de révision `codex/sdk-sync-*`, préserve les métadonnées Git et les répertoires de construction/état et refuse les branches de synchronisation existantes. Utilisez `--destination PATH`, `--sdk NAME` ou `--branch codex/NAME` pour une portée explicite. La synchronisation à distance valide l'arborescence synchronisée et pousse uniquement cette branche de révision ; il n'extrait pas, ne fusionne pas, n'écrit pas principal et ne crée pas de balises de version. Examinez toute suppression affichée par le test à sec avant de l'appliquer.

L'image du générateur Go/PHP/Python est épinglée sur la version 7.19.0 pour une génération future reproductible ; les sorties existantes conservent leur provenance originale du générateur d'instantanés jusqu'à une régénération vérifiée séparément. Les tests de script utilisent le programme d'exécution de tests de Node (`vp run test:scripts`), tandis que les tests SDK utilisent Vitest (`vp test run`).
