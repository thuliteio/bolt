# bolt

## 2.0.0

### Major Changes

- [#23](https://github.com/thuliteio/bolt/pull/23) [`d7735a0`](https://github.com/thuliteio/bolt/commit/d7735a0ad95e08731b4b7004621ee650fe7a4ec9) Thanks [@h-enk](https://github.com/h-enk)! - refactor: migrate to Dart Sass and modernize build pipelines

  BREAKING CHANGE: LibSass support has been removed. Dart Sass is now required.

  **WHAT changed:**
  - Replaced LibSass with Dart Sass for CSS compilation
  - All asset build pipelines now follow Hugo's official best practices
  - JavaScript build aligned with Hugo's esbuild/Babel patterns

  **WHY:**
  - LibSass has been deprecated by the Sass team since 2020
  - Dart Sass provides modern Sass language features and better maintenance
  - Hugo's official patterns ensure future compatibility and reliability

  **HOW to upgrade:**
  Install Dart Sass in your environment:
  - macOS (Homebrew): `brew install sass/sass/sass`
  - Linux (Snap): `sudo snap install dart-sass`
  - Windows (Scoop): `scoop install sass`
  - Or: npm install -g sass

  Other improvements:
  - Enhanced Prettier, ESLint, and VS Code configuration
  - Expanded Dependabot automation and dependency management
  - Improved error handling and performance in JavaScript modules
  - Modern CSS reset and better cross-browser consistency

## 1.5.2

### Patch Changes

- [#17](https://github.com/thuliteio/bolt/pull/17) [`404b89a`](https://github.com/thuliteio/bolt/commit/404b89a607848290e24739aba07a35f6b8914175) Thanks [@h-enk](https://github.com/h-enk)! - Update for security fix, Netlify fix, Hugo v0.156.0, and update dependencies

## 1.5.1

### Patch Changes

- [#15](https://github.com/thuliteio/bolt/pull/15) [`2daaaaf`](https://github.com/thuliteio/bolt/commit/2daaaaf3247d59b9fc3b9315e8602ff111b7e1c2) Thanks [@h-enk](https://github.com/h-enk)! - Update for create-thulite v2.0.2

## 1.5.0

### Minor Changes

- [#11](https://github.com/thuliteio/bolt/pull/11) [`ab6830b`](https://github.com/thuliteio/bolt/commit/ab6830b0a7935c7150a0f1e638993326a9723987) Thanks [@h-enk](https://github.com/h-enk)! - Update for new template system in Hugo v0.146.0

## 1.4.0

### Minor Changes

- [#8](https://github.com/thuliteio/bolt/pull/8) [`9949e02`](https://github.com/thuliteio/bolt/commit/9949e027909ebd06e9392853b7fd6341f509c16d) Thanks [@h-enk](https://github.com/h-enk)! - Update for migration from Hyas to Thulite

## 1.3.2

### Patch Changes

- [#6](https://github.com/gethyas/bolt/pull/6) [`29c9a1d`](https://github.com/gethyas/bolt/commit/29c9a1d2ba65501f479c54325572a621c5ed7867) Thanks [@h-enk](https://github.com/h-enk)! - Install prettier and vite as devDependencies

## 1.3.1

### Patch Changes

- [#5](https://github.com/gethyas/bolt/pull/5) [`aa14831`](https://github.com/gethyas/bolt/commit/aa14831ae9442ce1a985e235acd95a7e79ccdfcd) Thanks [@h-enk](https://github.com/h-enk)! - Update gethyas dependency

## 1.3.0

### Minor Changes

- [#4](https://github.com/gethyas/bolt/pull/4) [`0d719de`](https://github.com/gethyas/bolt/commit/0d719de6a3504afacb2ee61e32d396d7e65879cf) Thanks [@h-enk](https://github.com/h-enk)! - Update for new Hyas setup
