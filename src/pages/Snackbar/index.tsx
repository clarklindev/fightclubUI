import { useState } from 'react';

import { Snackbar, Button, Icon, Heading, Tabs, CodeBlock } from '@fightclub/components';
import { ClipboardIcon } from '@fightclub/icons';
import Code from './code.mdx';

const SnackbarExample = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onClickHandler = () => {
    console.log('onClickHandler');
    setShowSnackbar(true);
  };

  const preview = (
    <>
      {showSnackbar && <Snackbar setShowSnackbar={setShowSnackbar}>copied to clipboard</Snackbar>}
      <Button onClick={onClickHandler} intent="icon">
        <Icon size="L">
          <ClipboardIcon />
        </Icon>
      </Button>
    </>
  );

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Snackbar
      </Heading>

      <Tabs>
        <Tabs.TriggerGroup>
          <Tabs.Trigger data-tab="0">PREVIEW</Tabs.Trigger>
          <Tabs.Trigger data-tab="1">CODE</Tabs.Trigger>
        </Tabs.TriggerGroup>
        <Tabs.ContentGroup>
          <Tabs.Content data-tab="0">{preview}</Tabs.Content>
          <Tabs.Content data-tab="1">
            <CodeBlock><Code/></CodeBlock>
          </Tabs.Content>
        </Tabs.ContentGroup>
      </Tabs>
    </>
  );
};

export default SnackbarExample;
