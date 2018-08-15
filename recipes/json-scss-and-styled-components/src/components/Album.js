import React from 'react'
import styled from 'styled-components'
import { position, rgba } from 'polished'
import { animation, colors, spacing, border } from '../styles/tokens.json'

// Styles
// ==============================================

// Settings
const albumTransition = `opacity ${animation.speed} ease`

// Block
// ----------------------------------

const Album = styled.a`
  display: block;
  position: relative;
  padding-top: 100%;
  text-align: center;
  color: ${colors.text};
  border: ${border.width} solid ${colors.text};
  background: ${colors.background};
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    ${position('absolute', '0')}
    background-image: linear-gradient(to top, ${colors.background} 20%, ${rgba(colors.background, 0)} 90%);
    opacity: 1;
    transition: ${albumTransition};
  }

  &:hover::after {
    opacity: 0;
  }
`

// Elements
// ----------------------------------

const Caption = styled.span`
  ${position('absolute', null, spacing.default, spacing.default)}
  opacity: 1;
  transition: ${albumTransition};
  z-index: 1;

  /* stylelint-disable */
  ${Album}:hover & {
    opacity: 0;
  }
  /* stylelint-enable */
`

const Title = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -1px;
`

const Artist = styled.span`
  display: block;
  font-size: 1rem;
  color: grey;
  text-transform: uppercase;
`

// Markup
// ==============================================

export default (props) =>
  <Album href={props.url} target="_blank" style={{ backgroundImage: `url(${props.img})` }}>
    <Caption>
      <Title>{ props.title }</Title>
      <Artist>{ props.artist }</Artist>
    </Caption>
  </Album>
