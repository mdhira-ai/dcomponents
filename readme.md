# My Button Package

A simple, reusable button component for React applications, built with TypeScript and bundled with Rollup.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Development](#development)
   - [Prerequisites](#prerequisites)
   - [Setting Up the Project](#setting-up-the-project)
   - [Project Structure](#project-structure)
   - [Building the Package](#building-the-package)
   - [Testing Locally](#testing-locally)
4. [Publishing](#publishing)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To use this package in your project, you can install it via npm:

```bash
npm install my-button-package
```

## Usage

After installation, you can import and use the Button component in your React application:

```jsx
import React from "react";
import { Button } from "my-button-package";

function App() {
  return (
    <Button onClick={() => console.log("Button clicked")}>Click me!</Button>
  );
}

export default App;
```

## Development

This section covers how to set up, develop, and maintain this package.

### Prerequisites

- Node.js (version 14.x or later)
- npm (usually comes with Node.js)

### Setting Up the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-button-package.git
   cd my-button-package
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Project Structure

```
my-button-package/
├── src/
│   ├── Button.tsx
│   └── index.ts
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

- `src/Button.tsx`: The main component file
- `src/index.ts`: Exports the component
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration
- `rollup.config.js`: Rollup bundler configuration

### Building the Package

To start the making package, run:

This command creates a `package.json` file in the project directory.

```bash
npm init -y
```

This command installs the necessary dependencies for building the package.

```bash
npm install --save-dev react @types/react typescript rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs
```

in `package,json` file put this text

```json
 "main": "dist/cjs/index.js",
  "module": "dist/esm/index.esm.js",
  "types": "dist/index.d.ts",
  "type": "module",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "rollup -c",
    "prepublishOnly": "npm run build"
  },
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0"
  },
```

in `rollup.config.js` put this code

```javascript
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];
```

in `tsconfig.json` put this code

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "lib": ["dom", "esnext"],
    "jsx": "react",
    "declaration": true,
    "declarationDir": "dist",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

This command builds the package:

```bash
npm run build
```

This command uses Rollup to bundle the TypeScript files and output them to the `dist/` directory.

### Testing Locally

To test the package locally before publishing:

1. In the package directory, run:

   ```bash
   npm link
   ```

2. In your test project, run:

   ```bash
   npm link my-button-package
   ```

3. You can now import and use the component in your test project.

To unlink after testing:

1. In your test project:

   ```bash
   npm unlink my-button-package
   ```

2. In the package directory:
   ```bash
   npm unlink
   ```

## Publishing

When you're ready to publish your package:

1. Update the version in `package.json`:

   ```bash
   npm version patch # or minor, or major
   ```

2. Publish to npm:
   ```bash
   npm publish
   ```

Note: Make sure you're logged in to npm (`npm login`) and have the necessary permissions to publish.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

For more information or support, please open an issue in the GitHub repository.
