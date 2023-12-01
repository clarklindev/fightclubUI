import { Text, Layout, Heading, List } from '@swagfinger/components';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <article>
      <Layout>
        <Heading variation="h1" data-observable="true">
          Introduction
        </Heading>
        <Text>SwagfingerUI is a design system meant for an easier developer experience.</Text>

        <Text>
          It uses React (Function-based library of compound components), TailwindCSS and Class Variance Authority (CVA)
          under the hood.
        </Text>
        <Text>
          The goal of this library is to combine the user-friendly modular approach of customizing with compound
          components while leveraging TailwindCSS (known for its well-documented utility-first library of reusable
          classes) with the variant abilities of CVA (Class Variance Authority). The aim is to create a solution that
          strikes a balance between being opinionated and providing flexibility by incorporating the best of both
          worlds. Designed to offer the right amount of opinionatedness, ensuring that users have access to a range of
          pre-defined styles and components, while also providing the ability to tailor the output to meet their
          specific requirements.
        </Text>
        <Text>Pre-defined modular components - with default styling, support of theming and darkmode.</Text>
        <Text>Built with accessibility in mind.</Text>
      </Layout>

      <Layout>
        <Heading variation="h2" size="level2" data-observable="true">
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
      </Layout>

      {/* <Layout>
        <Heading variation="h2" size="level2" data-observable="true">
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
