import React from 'react'
import styled from 'styled-components'
import { modularScale } from 'polished'

// This is a super super basic example.
// In the real-world, you'll probably want a prop to allow control of heading
// element semantics and another prop for the "cosmetic" size.

// Styles
// ==============================================

const Heading = styled.h1`
  font-size: ${modularScale(2)};
  font-weight: bold;
  letter-spacing: -1px;
`

// Markup
// ==============================================

export default (props) =>
  <Heading>{props.children}</Heading>
