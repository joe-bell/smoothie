<h1 align="center">Smoothie 🍹</h1>

<p align="center">
    <strong>A deliciously scalable and adaptable style sheet methodology</strong> by <a href="https://twitter.com/joebell_">Joe Bell</a>
</p>

---

The current CSS landscape is **thriving** and overflowing with new concepts and
tools, but this often leads to two scenarios:

1. Where on earth do I start?
2. How can I regularly experiment with new tools without having to completely refactor my existing project styles?

Smoothie's high-level 3-layered architecture gives you the freedom to easily build and experiment with the CSS tool/s that **you** want to use.

## Contents

1. [Architecture](#architecture-)
    1. [Tokens](#1-tokens)
    2. [Global](#2-global)
    3. [Components](#3-components)
2. [Standards](#standards-️)
3. [Recipes](#recipes-)
4. [Tools](#tools-)
5. [Built with Smoothie](#built-with-smoothie-)
6. [Resources](#resources-)

---

## Architecture 🏗

Smoothie splits your design into **3** key layers, imported in
the following cascade order:

1. [**Tokens**](#1-tokens)
2. [**Global**](#2-global)
3. [**Components**](#3-components)

Let's break that down into more detail…

### 1. Tokens

Tokens, or "Design Tokens" are an intrinsic collection of values that define
your project/Design System's visual language. This could include information
such as:

* Colours
* Spacing
* Typography - Font-size / Line-height / scale
* Animation - speed / easing
* Breakpoints
* *etc…*

> Tokens are preferably **platform-agnostic** and **human-readable**, stored in YAML/JSON.

However, for smaller projects if you'd prefer to store your tokens in a single format that compliments your build process, that's totally fine. For example; if you're using SCSS you could use traditional variables/maps ([just be careful when it comes to CSS variables](https://medium.com/@stowball/css-variables-are-a-sometimes-food-f01dd24f51e8)), or if you're using a CSS-in-JS library you could store in a JS module. Choose a solution that works best for **your** needs.

If you're stumped on build processes, check out the [recipes](#recipes).

#### Examples

* [Polaris Tokens](https://github.com/Shopify/polaris-tokens) - @Shopify
* [Design Tokens](https://github.com/opentable/design-tokens) - @opentable
* [Photon Design Tokens](https://github.com/FirefoxUX/design-tokens) - @FirefoxUX

### 2. Global

CSS is heavily criticised for its global scope—with common pain points including
clashing selectors and specificity battles—but is it *actually* that bad?

<details>
  <summary>No, it's really not that bad.</summary>

  Global styles can be an incredibly powerful and efficient way of styling your
  application; browser default styles can be reset or "normalized", base styles
  can be defined (fonts, vertical rhythm etc.) and common patterns can be reused
  with complete flexibility of markup. However, there's one crucial key to its
  success: **strategy**.

  Global styles aren't that bad if you treat them with thought and care.
</details>

</br>
<!--
    I know I know, I'm sorry, this is the only way I can add a margin after the `<details>` block in GitHub-flavoured Markdown 😢
-->

Smoothie's recommended global architecture borrows from [Harry Roberts's](https://github.com/csswizardry)
successful [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), with some minor adjustments.

> Note: Don't necessarily feel obligated to use this specific strategy, the best strategy is to have one.

Consider grouping your global styles and defining in the following order:

1. ~~Settings~~ **Config** (Optional)
    * If you're using any third-party packages, this is where you'll want to tie any variables to your previously-defined Tokens. If you're **not** using any third-party packages you can discard this layer.
    * *For example* - for example,you may want to tie breakpoints in your Tokens to a Sass-powered media query library such as Sass MQ.
2. **Tools**
    * Mixins, Functions etc.
3. **Generic**
    * The first layer that actually outputs CSS, containing high-level styling.
    * *For example* - Resets, Normalize etc.
4. **Elements**
    * Base styling for your HTML elements.
    * *For example* - Page, Basic Links, Tables etc.
5. **Objects**
    * Common structural and non-cosmetic design patterns.
    * *For example* - your grid system, media object, flag object, lists etc.
    * *Implementation*
      * Objects should use **class selectors** for complete markup flexibility.
      * Consider prefixing your object classes with `.o-` for extra clarity.
6. ~~Trumps~~ **Utilities**
    * Helper classes that have the power to override any other styles.
    * *For example* - spacing, typography, hiding content etc.
    * *Implementation*
        * Utilities have a narrower focus and carry higher specificity thanks to its use of `!important`. For this reason, ITCSS refers to the layer as "Trumps", but with recent updates to the political climate it felt best to be agnostic.
        * Consider prefixing your utility classes with `.u-` for extra clarity.

#### Examples

If you're still stuck, check out these great ITCSS examples:

* [Toolkit - @sky-uk](https://github.com/sky-uk/toolkit)*
* [Supercell - @sky-uk](https://github.com/sky-uk/toolkit)*
* [Pantsuit (Medium Article) - hillaryclinton.com](https://medium.com/git-out-the-vote/pantsuit-the-hillary-clinton-ui-pattern-library-238e9bf06b54)
* [inuitcss - @inuitcss](https://github.com/inuitcss/inuitcss)
* [Blaze - @blaze-ui](https://github.com/BlazeUI/blaze)

<small>* Shameless [self-promotion](https://github.com/joebell93) of previous work.</small>

Just remember, in Smoothie the "settings" and "components" layer are handled differently (as described above).

### 3. Components

By definition, components are the individual building blocks that form your user-interface; such as buttons, forms, user icons and so much more.

There is a growing need–especially in large-scale web apps–to create components that are fully encapsulated and less susceptible to leaking CSS; in other words, components that can be lifted and shifted anywhere with ease.

### What are the options?

Now that your components are kept separate from your tokens and global styles, you have complete freedom to explore a range of options to build them! H*ck, you could even test different tools for different components.

The choice is **yours**.

You could use:

* [CSS](#build-tools)
    * Contrary to popular belief, you can still write component styles in a standard StyleSheet. You could even use a [processor](#build-tools) to make your life a little easier.
    * Similarly to the Global layer, have a **strategy** to ensure consistency and prevent clashing selectors.
      > ProTip: Use BEM, and prefix your component classes with `.c-` for extra clarity.
* [CSS-in-JS](#build-tools)
    *
* [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
    * Defining your styles inside the Shadow DOM will scope them to the Shadow Root and [fully encapsulate](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/) your component styles.

---

## Standards ✍️

@TODO

---

## Recipes 📖

Unsure where to start? Check out some of these example projects:

1. JSON, SCSS and Emotion (WIP)
2. [JSON, SCSS and Styled Components](recipes/json-scss-and-styled-components/README.md)

---

## Tools 🛠

### Token Tools

* [Theo](https://github.com/salesforce-ux/theo) - @Salesforce

    A tool that transforms Design Tokens into a huge range of different consumable formats.

### Build Tools

There are a bunch of great tools to make your life even easier when it comes to writing CSS:

* Pre-processors *(Ideal for Global, Components)*
    * [Less](http://lesscss.org/features/)
    * [Sass](https://sass-lang.com/guide) <sup>🍹</sup>
    * [Stylus](https://github.com/stylus/stylus/)
* Post-processors *(Ideal for Global, Components)*
    * [PostCSS](https://postcss.org/)
* [CSS Modules](https://github.com/css-modules/css-modules) *(Ideal for Components)*
* CSS-in-JS *(Ideal for Components)*
    * [Emotion](https://emotion.sh/)
    * [Styled Components](https://www.styled-components.com/)

<small><sup>🍹</sup> Recommended</small>

---

## Built with Smoothie 🍹

* [LADbible](https://github.com/TheLADbibleGroup/) (WIP)

Using Smoothie in your project? Feel free to raise a PR and add yourself to this list.

---

## Resources 📚

### Tokens

* ["Design Tokens for Dummies"](https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71) - @chuckn0risk
* ["Tokens in Design Systems"](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) - @nathanacurtis
* ["Creating Themeable Design Systems"](http://bradfrost.com/blog/post/creating-themeable-design-systems/) - @bradfrost

### Global

* ["Managing CSS Projects with ITCSS"](https://www.youtube.com/watch?v=1OKZOV-iLj4) - @csswizardry
* ["Object Oriented CSS"](https://github.com/stubbornella/oocss/wiki) - @stubbornella

### Components

* "A Unified Styling Language" - @markdalgleish
  * [CSSconf EU 2017 Talk (YouTube)](https://www.youtube.com/watch?v=X_uTCnaRe94)
  * [Article (Medium)](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
* ["All You Need to Know About CSS-in-JS"](https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc) - @wesharehoodies

---

## License ©

Licensed under the Apache 2.0 License, Copyright © 2018-Present [Joe Bell](https://joebell.co.uk).

See [LICENSE](LICENSE) for more information.