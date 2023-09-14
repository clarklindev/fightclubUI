import React, { useState } from 'react';
import { Snackbar, Button, Icon, Heading } from 'swagfingerui';
import CopyIcon from 'swagfingerui/icons/CopyIcon';

const SnackbarExample = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onClickHandler = () => {
    console.log('onClickHandler');
    setShowSnackbar(true);
  };

  return (
    <>
      <Heading variation="h4">Snackbar</Heading>
      {showSnackbar && (
        <Snackbar setShowSnackbar={setShowSnackbar}>
          copied to clipboard
        </Snackbar>
      )}
      <Button onClick={onClickHandler} intent="icon">
        <Icon size="25px">
          <CopyIcon />
        </Icon>
      </Button>
    </>
  );
};

export default SnackbarExample;
