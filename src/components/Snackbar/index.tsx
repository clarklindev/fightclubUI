import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type SnackbarProps = {
  setShowSnackbar: (prop: boolean) => void;
  children: React.ReactNode;
};

const Snackbar = ({ setShowSnackbar, children }: SnackbarProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setSnackbarOpen(true);

    const timeout = setTimeout(() => {
      setSnackbarOpen(false);
      setShowSnackbar(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [setShowSnackbar]);

  return (
    <SnackbarContainer display-component={Snackbar.displayName} className={snackbarOpen ? 'show' : ''}>
      {children}
    </SnackbarContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const SnackbarContainer = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

  &.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;

Snackbar.displayName = 'Snackbar';
export { Snackbar };
