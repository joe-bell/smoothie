import React from 'react'
import ShadowDOM from 'react-shadow'

export default props => {
  const spacing = '16px'
  const spacingSmall = '8px'

  // @TODO: Find a way to minify this string without a nasty/hacky RegEx.
  const styles = `
    :host { 
      padding: ${spacingSmall} ${spacing} 0 ${spacing};
      background-color: #fff;
      border-bottom: 2px solid #000;
    }

    a {
      color: #1978d4;
      text-decoration: none;
    }

    a:hover,
    a:focus {
      text-decoration: underline;
    }

    .c-header {
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      margin-left: -${spacing};
    }

    .c-header__item {
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      width: 100%;
      padding-left: ${spacing};
      margin-bottom: ${spacingSmall};
    }

    .c-header__item--left,
    .c-header__item--right {
      width: 50%;
    }

    .c-header__item--right {
      text-align: right;
    }

    .c-header__item--center {
      text-align: center;
    }

    .u-text-bold {
      font-weight: bold;
    }

    @media screen and (min-width: 640px) {
      .c-header__item {
        position: relative;
        width: 33.3%;
      }

      .c-header__item--center {
        right: 33.33%;
        left: auto;
      }

      .c-header__item--right {
        right: auto;
        left: 33.33%;
      }
    }
  `

  return (
    <ShadowDOM>
      <header>
        <style type="text/css">{styles}</style>
        <div class="c-header">
          <div class="c-header__item c-header__item--left">
            <a href="/#recipes-"> ⃪ Back to Recipes</a>
          </div>
          <div class="c-header__item c-header__item--right u-text-bold">
            <a href="/">Smoothie</a><span aria-hidden="true">🍹</span>
          </div>
          <div class="c-header__item c-header__item--center u-text-bold">
            {props.recipe}
          </div>
        </div>
      </header>
    </ShadowDOM>
  )
}
