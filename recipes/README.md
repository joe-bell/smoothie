# Recipes 📖

This project uses `lerna` and `yarn` workspaces to avoid lengthy installation and dependency hell. If you want to run any of these examples locally, you'll need to follow the following steps beforehand.

## Installation

>Optional: If you're using NVM, you can take advantage of `nvm use`.

1. Clone the repository
    ```
    git clone git@github.com:joebell93/smoothie.git
    ```
2. Install prerequisites
    ```
    npm i -g lerna yarn
    ```
3. Link together and install dependencies
    ```
    lerna bootstrap && yarn
    ```

## Scripts

### Developer Environment

Spin up recipes in the **project root folder** via 

```
yarn dev <package-name>
```

Changes are visible at [http://localhost:3000](http://localhost:3000).

### Other

Alternatively, within the **package folder**, run any of the scripts defined in `package.json` (i.e. `yarn <script-name>`).
