import { Icon, Heading, Tabs, Layout, CodeBlock } from '@fightclub/components';
import { ShoppingCartIcon } from '@fightclub/icons';

import Code from './code.mdx';

const IconExample = () => {
  const preview = (
    <>
      {/* extra-small */}
      <Layout>
        <Heading as="h2" size="S">
          XS
        </Heading>
        <Icon size="XS">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* small */}
      <Layout>
        <Heading as="h2" size="S">
          S
        </Heading>
        <Icon size="S">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* medium */}
      <Layout>
        <Heading as="h2" size="S">
          M
        </Heading>
        <Icon size="M">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* large */}
      <Layout>
        <Heading as="h2" size="S">
          L
        </Heading>
        <Icon size="L">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* x-large / xl*/}
      <Layout>
        <Heading as="h2" size="S">
          XL
        </Heading>
        <Icon size="XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xx-large / 2xl*/}
      <Layout>
        <Heading as="h2" size="S">
          2XL
        </Heading>
        <Icon size="2XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxx-large / 3xl*/}
      <Layout>
        <Heading as="h2" size="S">
          3XL
        </Heading>
        <Icon size="3XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxx-large / 4xl*/}
      <Layout>
        <Heading as="h2" size="S">
          4XL
        </Heading>
        <Icon size="4XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxx-large / 5xl*/}
      <Layout>
        <Heading as="h2" size="S">
          5XL
        </Heading>
        <Icon size="5XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxxx-large / 6xl*/}
      <Layout>
        <Heading as="h2" size="S">
          6XL
        </Heading>
        <Icon size="6XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxxxx-large /7xl*/}
      <Layout>
        <Heading as="h2" size="S">
          7XL
        </Heading>
        <Icon size="7XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* xxxxxxxx-large /8xl*/}
      <Layout>
        <Heading as="h2" size="S">
          8XL
        </Heading>
        <Icon size="8XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* XXXXXXXXX-large /9xl*/}
      <Layout>
        <Heading as="h2" size="S">
          9XL
        </Heading>
        <Icon size="9XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>

      {/* XXXXXXXXXX-large /10xl*/}
      <Layout>
        <Heading as="h2" size="S">
          10XL
        </Heading>
        <Icon size="10XL">
          <ShoppingCartIcon />
        </Icon>
      </Layout>
    </>
  );

  return (
    <>
      <Heading as="h1" size="level1" data-observable="true">
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
              <Code />
            </CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default IconExample;
