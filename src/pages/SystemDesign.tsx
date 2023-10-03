import React from 'react';
import { Heading, Text, CodeBlock } from '../components';

const SystemDesign = () => {
  return (
    <div>
      <Heading variation="h4">System Design</Heading>
      <br />

      <Heading variation="h5">Routing</Heading>
      <Text>React Router 6 - https://github.com/swagfinger/template-react-router-6</Text>
      <Text>NextJS Routing - https://nextjs.org/docs/routing/introduction</Text>
      <br />

      <Heading variation="h5">Positioning</Heading>
      <p>components are placed in relation to their parents orientation (eg. column / row)</p>

      <br />
      <Heading variation="h5">Focus</Heading>
      <ul>
        <li>when components receive focus, it uses Tailwind focus ring instead of styling :focus.</li>
        <li>change this to outline: none;</li>

        <li>
          where possible use the useHoverFocus hook, it has support for both mobile clicking and hovering on larger
          screens
        </li>
      </ul>
      <br />

      <Heading variation="h6">using :focus</Heading>
      <CodeBlock language="css">
        {`button:focus {
  outline-width: 3px;
  outline-style: dashed;
  outline-color: orange;
  outline-offset: 10px;
}`}
      </CodeBlock>
    </div>
  );
};

export default SystemDesign;
