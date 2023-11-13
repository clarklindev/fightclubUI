import { useState } from 'react';

import { Snackbar, Button, Icon, Heading, ResizePanel } from '@swagfinger/components';
import { CopyIcon } from '@swagfinger/icons';

const SnackbarExample = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onClickHandler = () => {
    console.log('onClickHandler');
    setShowSnackbar(true);
  };

  return (
    <>
      <Heading variation="h1" data-observable="true">
        Snackbar
      </Heading>
      <ResizePanel>
        {showSnackbar && <Snackbar setShowSnackbar={setShowSnackbar}>copied to clipboard</Snackbar>}
        <Button onClick={onClickHandler} intent="icon">
          <Icon size="20px">
            <CopyIcon />
          </Icon>
        </Button>
      </ResizePanel>
    </>
  );
};

export default SnackbarExample;
