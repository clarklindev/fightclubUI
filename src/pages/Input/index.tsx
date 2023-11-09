import reactElementToJSXString from 'react-element-to-jsx-string';

import { useState, useEffect } from 'react';
import { Layout, Heading, Tabs, CodeBlock } from '@swagfinger/components';

import InputBasicExample from './InputBasicExample';
import InputReadOnlyExample from './InputReadOnlyExample';
import InputWithIconExample from './InputWithIconExample';
import InputNoBorderExample from './InputNoBorderExample';
import InputPasswordExample from './InputPasswordExample';
import InputFilterExample from './InputFilterExample';
import InputSearchExample from './InputSearchExample';

const InputExample = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    // Define the relative path to your file within the public directory

    const fetchData = async () => {
      const relativeFilePath = './src/pages/Input/InputNoBorderExample.tsx'; // Adjust the file extension and path
      try {
        const response = await fetch(relativeFilePath);
        if (response.ok) {
          const data = await response.text();
          console.log('DATA: ', data);
          setFileContent(data);
        } else {
          console.error(`Failed to fetch file: ${response.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const preview_noborder = (
    <Layout variation="block">
      <Heading variation="h5">Input (no-border)</Heading>
      <InputNoBorderExample />
    </Layout>
  );

  const tabsData = [
    { label: 'preview', content: preview_noborder },
    {
      label: 'code',
      content: '',
    },
  ];

  return (
    <>
      <Heading variation="h4">Input</Heading>

      <Tabs>
        <Tabs.TabWrapper data={tabsData}>
          <Tabs.TabHeaders />
          <Tabs.TabContent />
        </Tabs.TabWrapper>
      </Tabs>

      <Layout variation="block">
        <Heading variation="h5">Basic input</Heading>
        <InputBasicExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input (readonly)</Heading>
        <InputReadOnlyExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input + Icon</Heading>
        <InputWithIconExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Password</Heading>
        <InputPasswordExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Filter</Heading>
        <InputFilterExample />
      </Layout>

      <Layout variation="block">
        <Heading variation="h5">Input Search</Heading>
        <InputSearchExample />
      </Layout>
    </>
  );
};

export default InputExample;
