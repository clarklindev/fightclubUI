import React from 'react';
import { Card, Heading, Layout } from '@swagfinger/components';

const Navbar = () => {
  return (
    <>
      <Heading variation="h1" data-observable="true">
        Navbar
      </Heading>

      <Layout className="mt-5">
        <Card>
          <nav className="bg-blue-500 p-4 text-white">Navbar</nav>

          <div className="container mx-auto mt-4">
            <div className="grid grid-cols-8 grid-rows-2 gap-4">
              <div className="bg-gray-600 h-32 p-4 col-span-2 row-span-2">NavSide</div>

              <div className="bg-gray-600 h-32 p-4 col-span-4 row-span-2">Main content area</div>

              <div className="bg-gray-600 h-32 p-4 col-span-2 row-span-2">OnThisPage</div>
            </div>
          </div>
        </Card>
      </Layout>
    </>
  );
};

export default Navbar;
