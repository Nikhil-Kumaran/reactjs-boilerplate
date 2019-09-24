# reactjs-boilerplate

Basic react setup with babel, webpack and basic loaders.

This is similar to `create-react-app` but gives you more control over the compilation and build configurations.

## Prerequisites

> **use node >= 10.16.0**

## Installation

```bash
npm install -g reactjs-boilerplate
```

After installation, use can use the following command to initialize your project.

```bash
reactjs-boilerplate project-name
```

Alternatively, you can use `npx` to directly use `reactjs-boilerplate` without installing globally.

```bash
npx reactjs-boilerplate project-name
```

## Usage

After initializing your project, you can use the following scripts.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will hot reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.

It bundles your files in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

### `npm run build-serve`

This command will build your app and start a server called `serve` which will serve your build files.
