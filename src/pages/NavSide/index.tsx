import React from 'react';
import { Heading, Card, Layout } from '@/components';

const NavSide = () => {
  return (
    <>
      <Heading as="h1" className="text-xl" data-observable="true">
        NavSide
      </Heading>

      <Layout className="mt-5">
        <Card>
          <nav className="bg-gray-600 p-4">Navbar</nav>

          <div className="container mx-auto mt-4">
            <div className="grid grid-cols-8 grid-rows-2 gap-4">
              <div className="bg-blue-500 text-white h-32 p-4 col-span-2 row-span-2">NavSide</div>

              <div className="bg-gray-600 h-32 p-4 col-span-4 row-span-2">Main content area</div>

              <div className="bg-gray-600 h-32 p-4 col-span-2 row-span-2">OnThisPage</div>
            </div>
          </div>
        </Card>
      </Layout>
    </>
  );
};

export default NavSide;
