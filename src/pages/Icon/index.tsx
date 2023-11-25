import reactElementToJSXString from 'react-element-to-jsx-string';

import { Icon, Heading, Tabs, CodeBlock, Layout } from '@swagfinger/components';
import { ShoppingCartIcon } from '@swagfinger/icons';

const IconExample = () => {
  const preview = (
    <>
      {/* small */}
      <Layout>
        <Heading variation="h2" size="S">
          S
        </Heading>
        <Icon size="S">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* medium */}
      <Layout>
        <Heading variation="h2" size="S">
          M
        </Heading>
        <Icon size="M">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* large */}
      <Layout>
        <Heading variation="h2" size="S">
          L
        </Heading>
        <Icon size="L">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* x-large / xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XL
        </Heading>
        <Icon size="XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xx-large / 2xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XXL / 2XL
        </Heading>
        <Icon size="XXL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxx-large / 3xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XXXL / 3XL
        </Heading>
        <Icon size="XXXL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxx-large / 4xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XXXXL / 4XL
        </Heading>
        <Icon size="4XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxx-large / 5xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XXXXXL / 5XL
        </Heading>
        <Icon size="5XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxxx-large / 6xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XXXXXXL / 6XL
        </Heading>
        <Icon size="6XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxxxx-large /7xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XXXXXXXL / 7XL
        </Heading>
        <Icon size="7XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxxxxx-large /8xl*/}
      <Layout>
        <Heading variation="h2" size="S">
          XXXXXXXXL / 8XL
        </Heading>
        <Icon size="8XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>
    </>
  );

  const previewString = reactElementToJSXString(preview);

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Icon
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>

        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock>
              {`
import {Icon} from '@swagfinger/components';

${previewString}
`}
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default IconExample;
