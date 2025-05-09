import { Text, Layout, Heading, List } from '@fightclub/components';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <article>
      <Layout>
        <Heading as="h1" size="level1" data-observable="true">
          Introduction
        </Heading>
        <Text>
          {import.meta.env.VITE_UI_ALIAS_NAME}UI is a design system meant for an easier developer experience.
          <br />
          <br />
          Have you ever worked in a company where you cried everyday because development was an awful experience? There
          is a clear difference between a component library that only works, compared to one that developers appreciate
          because of ease of use. The process of building a design system usually requires significantly more attention
          to detail, expertise, and time than building a project based on an existing system. This design system aims to
          bridge the gap between starting from scratch and allowing developer creative freedom.
          <br />
          <br />
          {import.meta.env.VITE_UI_ALIAS_NAME}UI uses React (Function-based library of compound components), TailwindCSS
          and Class Variance Authority (CVA) under the hood.
          <br />
          <br />
          The goal of this library is to combine the user-friendly modular approach of customizing with compound
          components while leveraging TailwindCSS (known for its well-documented utility-first library of reusable
          classes) with the variant abilities of CVA (Class Variance Authority). The aim is to create a solution that
          strikes a balance between being opinionated and providing flexibility by incorporating the best of both
          worlds.
          <br />
          <br />
          Designed to offer the right amount of opinionatedness, ensuring that users have access to a range of
          pre-defined styles and components, while also providing the ability to tailor the output to meet their
          specific requirements.
        </Text>
        <Text>
          Pre-defined modular components, built with accessibility in mind. <br />
          With default styling, support of theming and darkmode.
        </Text>
        <br />
        <Text>The first rule of fightclubUI is... you do not talk about fightclubUI!</Text>
        <Text>As a creator, did you break the rules... or make them?</Text>
      </Layout>

      {/* <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Release Features
        </Heading>
        <div>
          <ul>
            <li>Written in Typescript</li>
            <li>React, TailwindCSS, CVA, (tw-merge, CLSX, cn)</li>
            <li>Dark-mode compatible</li>
            <li>Theming</li>
            <li>Accessible</li>
            <li>Tested</li>
          </ul>
        </div>
      </Layout> */}

      {/* <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Motivation
        </Heading>
        <Link to="https://tailwindui.com/components/preview">https://tailwindui.com/components/preview</Link>
        <br />
        <Link to="https://ui.shadcn.com/">https://ui.shadcn.com/</Link>
        <br />
        <Link to="https://vercel.com/design/introduction">https://vercel.com/design/introduction</Link>
        <br />
        <Link to="https://x.com">https://x.com</Link>
        <br />
        <Link to="https://vitejs.dev/guide/">https://vitejs.dev/guide/</Link>
        <br />
        <Link to="https://www.radix-ui.com/">https://www.radix-ui.com/</Link>
        <br />
        <Link to="https://react-spectrum.adobe.com/react-aria/index.html">
          https://react-spectrum.adobe.com/react-aria/index.html
        </Link>
        <br />
        <Link to="https://mui.com/">https://mui.com/</Link>
        <br />
        <Link to="https://headlessui.com/">https://headlessui.com/</Link>
      </Layout> */}
    </article>
  );
};

export default Introduction;
