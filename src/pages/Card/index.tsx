import React from 'react';

import { Card, Heading } from '../../components';

const CardExample = () => {
  return (
    <>
      <Heading variation="h4">Card</Heading>
      <Card
        color="white"
        borderColor="#DDD"
        borderRadius="10px"
        width="550px"
        height="300px">
        this is dummy text
      </Card>
    </>
  );
};

export default CardExample;
