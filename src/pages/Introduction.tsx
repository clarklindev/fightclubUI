import { Text, Section, Heading } from '@swagfinger/components';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <article>
      <Section>
        <Heading variation="h1" data-observable="true">
          Introduction
        </Heading>
        <Text>Swagfinger-UI is a design system meant for an easier developer experience.</Text>
        <Text>It uses Styled-Components / Class Variance Authority (CVA) and TailwindCSS under the hood.</Text>
        <Text>
          The goal of this library is to combine the user-friendly approach of TailwindCSS, which is known for its
          comprehensive documentation, with the structure of Styled Components / CVA (Class Variance Authority). The aim
          is to create a solution that strikes a balance between being opinionated and providing the flexibility to meet
          different needs. By incorporating the best of both worlds, this library makes it easy for developers to
          quickly create a visually appealing interface without sacrificing design control. Whether you're working on a
          small project or a large one, this library can help you achieve your goals in a streamlined manner. Overall,
          the library is designed to offer the right amount of opinionatedness, ensuring that users have access to a
          range of pre-defined styles and components, while also providing the ability to customize and tailor the
          output to meet their specific requirements.
        </Text>
        <Text>Pre-defined modular components - with default styling, support of theming and darkmode.</Text>
        <Text>Built with accessibility in mind.</Text>
        <Text>Leverage already well-built battle-tested libraries. We dont re-invent the wheel.</Text>
      </Section>

      <Section>
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
      </Section>

      <Section>
        <Heading variation="h2" size="level2" data-observable="true">
          Release Features
        </Heading>
        <div>
          <ul>
            <li>Written in Typescript</li>
            <li>Styled Components, TailwindCSS, CVA, (tw-merge, CLSX, cn)</li>
            <li>Dark-mode compatible</li>
            <li>Theming</li>
            <li>Accessibility</li>
            <li>Tested</li>
          </ul>
        </div>
      </Section>
    </article>
  );
};

export default Introduction;
