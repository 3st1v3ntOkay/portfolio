import React from 'react'
import logo from '@/assets/simpleicon/github.svg'
import {
  ComplexLink,
  ComplexLinkFill,
  ComplexLinkHalf,
  ComplexLinkOutline,
  SimpleLink
} from '@/components'

const CustomLinks = () => {
  return (
    <>
      <SimpleLink link="./">Back</SimpleLink>

      <ul>
        <li>
          <SimpleLink link="./">simple link</SimpleLink>
        </li>
        <li>
          <ComplexLink link='/prototypes/sam' icon={logo}>figma-project.com</ComplexLink>
        </li>
        <li>
          <ComplexLinkFill link='/prototypes/sam' icon={logo}>figma-project.com</ComplexLinkFill>
        </li>
        <li>
          <ComplexLinkOutline link='/prototypes/sam' icon={logo}>figma-project.com</ComplexLinkOutline>
        </li>
        <li>
          <ComplexLinkHalf link='/prototypes/sam' icon={logo}>figma-project.com</ComplexLinkHalf>
        </li>
      </ul> 
    </>
  )
}

export default CustomLinks