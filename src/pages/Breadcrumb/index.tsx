import reactElementToJSXString from 'react-element-to-jsx-string';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CodeBlock, Heading, Tabs } from '@/components';

import Code from './code.mdx';

//example: https://example.com/products/shoes/nike

//import { useLocation, Link } from 'react-router-dom';
//const location = useLocation();
//console.log(location.pathname); ->  Output: "/products/shoes/nike"
const pathname = '/products/shoes/nike';

const BreadcrumbExample = () => {
  const preview = (
    <>
      <Breadcrumb path={pathname} />
    </>
  );

  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
        Breadcrumbs
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

export default BreadcrumbExample;
