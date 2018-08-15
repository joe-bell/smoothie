# Stylelint Config

## Setup

1. Install both [Stylelint](https://stylelint.io/) and the Smoothie Config
    ```bash
    npm i --save-dev stylelint @smoothie-css/stylelint-config
    ```
2. [Load the configuration object in your preferred format](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#configuration) and add the following to the top of your file:
    ```json
    {
      "extends": [
        "@smoothie-css/stylelint-config"
      ],
      ...
    }
    ```
3. Run the following command to lint your CSS with the Stylelint config:
    ```bash
    stylelint '**/*.css'
    ```
   You could also set this as an npm `script` within your project's `package.json`:
    ```json
    "scripts": {
      "lint:css": "stylelint '**/*.css'"
    }
    ```
    in this example, running via `npm run lint:css`

## Mixing Syntax

If you're using different syntax to write styles in your project, you may have to separate out your configs.

For example, let's say you're using vanilla CSS and Styled Components (CSS-in-JS library):

1. Create a new `.stylelint` directory in your project, with two JSON config files (one for each):
    ```
    .stylelint
      ├── css.json
      └── styled-components.json
    ```
2. Follow the previous setup steps to `extend` Smoothie's config in both files.

   _Note: For the majority of CSS-in-JS libraries  that use tagged template literals, you'll need to make use of [`stylelint-processor-styled-components`](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/processors.md)_.
3. Set-up a script for each tool, with one that runs both:
    ```json
    "scripts": {
        "lint:css": "stylelint '**/*.css' --config .stylelint/css.json",
        "lint:styled-components": "stylelint '**/*.js' --config .stylelint/styled-components.json",
        "lint": "npm run lint:css && npm run lint:styled-components"
    }
    ```