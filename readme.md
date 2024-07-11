# dcomponents Readme

Welcome to the `dcomponents` repository! This guide will help you set up and publish your own package.

## Getting Started

Follow these steps to clone the repository, modify the code, and publish your own version:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/mdhira-ai/dcomponents
```

or

```bash
npx create-boreal-package
```


### 2. Check Example in `src` Folder

Navigate to the `src` folder and examine the example code provided:

```bash
cd dcomponents/src
```

### 3. Create a New Code File in `src` Folder

Create any new code file in the `src` folder. For example:

```bash
touch src/MyNewComponent.tsx
```

### 4. Import the Code File in `index.ts`

Open the `index.ts` file and import your new code file:

```typescript
// src/index.ts
export * from './MyNewComponent';
```

### 5. Change the Package Name in `package.json`

Edit the `package.json` file to change the package name:

```json
// package.json
{
  "name": "your-new-package-name",
  ...
}
```

### 6. Change the Version Number According to Your Needs

Update the version number in the `package.json` file:

```json
// package.json
{
  "version": "1.0.0",
  ...
}
```

### 7. Follow the Example Folder for Making Hooks, Components, and Library

Use the examples in the `example` folder as a reference to create hooks, components, and library files.

### 8. Build the Package

Run the build script to compile your package:

```bash
npm run build
```

### 9. Log in to npm

Log in to your npm account:

```bash
npm login
```

### 10. Publish the Package

Finally, publish your package to npm:

```bash
npm publish
```

## Conclusion

You are now ready to use and share your customized package. Happy coding!