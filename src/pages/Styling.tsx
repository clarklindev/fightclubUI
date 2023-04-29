import React from 'react'
import Heading from '../components/Heading'
import Text from '../components/Text'

const Styling = () => {
  return (
    <>
      <Heading variation="h4">Styling</Heading>
      <Text>
        The main reason this component library was created, was to address the
        support for variants and props AND the ability to use Tailwindcss to
        style components.
        <br />
        It removes the need to pass props into styled components before being
        able to set the style by allowing you to set tailwind classes directly
        from the html.
        <br />
        The dark-mode toggle adjusts the CSS 'color-scheme' property, and
        components and svg icons adapt based on 'currentColor'
        <br />
        Theming takes precedence over default styling.
        <br />
      </Text>
    </>
  )
}
export default Styling
