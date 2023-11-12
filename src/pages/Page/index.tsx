import React from 'react';
import { CodeBlock, Heading, Text } from '@swagfinger/components';

const Page = () => {
  return (
    <div>
      <Heading variation="h1" data-observable="true">
        Adding Pages
      </Heading>
      <Heading variation="h2" data-observable="true">
        1. Adding nav link
      </Heading>
      <Heading variation="h3">Using react-router-dom 6</Heading>
      <Text>
        The first step to adding a page on the interface so that it appears as a navigation link is to look inside:
        <br />
        <br />
        'src/layouts/HomeLayout.tsx'
      </Text>
      <CodeBlock>{`<NavSide.Link to="page">Adding pages</NavSide.Link>`}</CodeBlock>

      <Heading variation="h2" data-observable="true">
        2. Register a route
      </Heading>
      <Text>
        The "to" prop is the route path. To add the route, look inside: <br />
        <br />
        'src/router.tsx'
      </Text>
      <CodeBlock>
        {`
import PageExample from '@swagfinger/pages/Page';

<Route path="/page" element={<PageExample />} />
      `}
      </CodeBlock>
      <Heading variation="h2" data-observable="true">
        3. Add the actual page
      </Heading>
      <Text>
        add the page to 'src/pages/', in the previous step, we imported Page from '/pages/Page'
        <br />
        <br />
        <CodeBlock>{`import PageExample from '@swagfinger/pages/Page';`}</CodeBlock>
        so create a folder named 'Page', inside 'src/pages/'.
        <br />
        Here is index.tsx template code to start you off:
        <br />
      </Text>
      <CodeBlock>
        {`
import React from 'react';
import { CodeBlock, Heading, Text } from '@swagfinger/components';

const Page = () => {
  return (
    <div>
      <Heading variation="h1" data-observable="true">Adding Pages</Heading>
    </div>
  );
};

export default Page;
        `}
      </CodeBlock>

      <Heading variation="h2" data-observable="true">
        4. Link with "On this page"
      </Heading>
      <Text>
        To link up and add items to "On this page" side component, you add <br />
        <br />
        'data-observable="true"'
        <br />
        <br /> to Heading component and it will use the Heading text value as the header text:
      </Text>
      <CodeBlock>
        {`<Heading variation="h1" data-observable="true">
  Adding Pages
</Heading>`}
      </CodeBlock>
    </div>
  );
};

export default Page;
