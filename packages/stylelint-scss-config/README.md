# Stylelint SCSS Config

## Setup

1. Install the package and its peer dependencies:
    ```bash
    npm i --save-dev stylelint @smoothie-css/stylelint-config stylelint-scss @smoothie-css/stylelint-scss-config
    ```
2. [Load the configuration object in your preferred format](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#configuration) and add the following to the top of your file:
    ```json
    {
      "extends": [
        "@smoothie-css/stylelint-config",
        "@smoothie-css/stylelint-scss-config"
      ],
      ...
    }
    ```
3. Run the following command to lint your CSS with the Stylelint config:
    ```bash
    stylelint '**/*.scss' --syntax scss
    ```
   You could also set this as an npm `script` within your project's `package.json`:
    ```json
    "scripts": {
      "lint:scss": "stylelint '**/*.scss'"
    }
    ```
    in this example, running via `npm run lint:scss`

## Mixing Syntax

If you're using different syntax to write styles in your project you may have to separate out your configs.

See the [`@smoothie-css/stylelint-config` README](../stylelint-config/README.md) for more info.