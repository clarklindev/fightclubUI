import React from 'react';
import { Heading, Text, CodeBlock } from '../components';

const SystemDesign = () => {
  return (
    <div>
      <Heading variation="h4">System Design</Heading>
      <br />
      <br />

      <Heading variation="h5">Routing</Heading>
      <Text>React Router 6 - https://github.com/swagfinger/template-react-router-6</Text>
      <Text>NextJS Routing - https://nextjs.org/docs/routing/introduction</Text>
      <br />
      <br />

      <Heading variation="h5">Validation</Heading>
      <Text>
        For Validation: leaning towards ZOD
        <br />
        https://zod.dev/ <br />
        https://validatejs.org/
        <br />
      </Text>
      <br />
      <br />

      <Heading variation="h5">Layout</Heading>
      <Text>TailwindCSS (https://tailwindui.com/documentation) and CSS Grid or CSS Flexbox</Text>
      <br />
      <br />

      <Heading variation="h5">Styling</Heading>
      <Text>
        The main reason this component library was created, was to address the support for variants and props AND the
        ability to use Tailwindcss to style components.
        <br />
        It removes the need to pass props into styled components before being able to set the style by allowing you to
        set tailwind classes directly from the html.
        <br />
        The dark-mode toggle adjusts the CSS 'color-scheme' property, and components and svg icons adapt based on
        'currentColor'
        <br />
        Theming takes precedence over default styling; however, tailwind classes applied to component override theming
        and variant props.
      </Text>
      <br />
      <br />

      <Heading variation="h5">Themes</Heading>
      <div>Supports theming</div>
      <br />
      <br />

      <Heading variation="h5">Icons</Heading>
      <div>
        SVG vector icons are the way to go, there are many icon libraries, i prefer Hero Icons: https://heroicons.com/
      </div>
      <br />
      <br />

      <Heading variation="h5">Darkmode</Heading>
      <div>
        Darkmode is a variation of each theme, themes are independent of each other but they all have their own
        light/dark mode.
      </div>
      <div>System preference setting just takes the mode that is set on the system.</div>
      <Text>
        Really like this transitioning button for the darkmode button, might implement but will think about it as I
        would prefer something cleaner: https://codepen.io/chriscoyier/pen/gOQPqBj
      </Text>
      <br />
      <br />

      <Heading variation="h5">Component Design</Heading>
      <Text>
        Components should be accessible, following accessibility best practices using guidelines:
        https://www.w3.org/WAI/ARIA/apg/patterns/
      </Text>
      <br />
      <Heading variation="h6">referencing</Heading>
      <Text>
        Components should have reference so they are accesible from higher up the component render chain, <br />
        for reference: https://react.dev/reference/react/forwardRef
      </Text>

      <Text>
        references to props that are not normal html element attributes should use the data- props formatted like
        [data-*]
      </Text>
      <br />

      <Heading variation="h6">Positioning</Heading>
      <Text>components are placed in relation to their parents orientation (eg. column / row)</Text>
      <Text>
        Intersection observer: for drop-down components - use IntersectionObserver to check if component is on top half
        or bottom half of screen realestate and then depending on that, you show the pop-up menu / content on the
        opposite hemisphere or depending if there is space (check the current position of focus element) and the height
        of the popup and if that added together is less than available space to the bottom of the screen, then you can
        show it in the same hemisphere.
        <br />
        <br />
        Intersection observer: another use of intersection observer is the aside menu section 'on this page' that lists
        the contents of the page, when the heading reaches the page, the title should highlight on the aside menu.
      </Text>
      <br />

      <Heading variation="h6">Modals</Heading>
      <Text>
        Modals should make use of React's portals: <br />
        https://react.dev/reference/react-dom/createPortal
      </Text>
      <br />
      <Heading variation="h6">Focus</Heading>

      <Text>when components receive focus, it uses Tailwind focus ring instead of styling :focus.</Text>
      <Text>for this to happen we change component on focus to outline: none;</Text>

      <Text>
        where possible use the useHoverFocus hook, it has support for both mobile clicking and hovering on larger
        screens
      </Text>

      <br />

      <Heading variation="h6">using :focus</Heading>
      <CodeBlock>
        {`button:focus {
  outline-width: 3px;
  outline-style: dashed;
  outline-color: orange;
  outline-offset: 10px;
        }`}
      </CodeBlock>

      <br />

      <Heading variation="h6">Modular component structure</Heading>
      <Text>
        Components should be designed in such a way that it promotes modularity. If you've every seen that syntax
        {`<Button.Icon>`}, whats happening is logical grouping (helpful with Readability) of Button and its
        sub-components. if you export 'Button', when used in code, you can reference subcomponents via Button eg.
        {`<Button.Icon>`}. when you define {`Button.Icon = () => { ... }`}, you are not including the const keyword
        because you are not declaring a new variable. Instead, you are adding a property named Icon to the existing
        Button object. This is a way to extend the Button component by adding functionality (in this case, the Icon
        sub-component) without re-declaring a new variable or component. When you use this module in other parts of your
        application, you can access the Button.Icon component as a nested component of Button. This can be shown via
        example:
      </Text>
      <CodeBlock>{`// Button.js

      import React from 'react';
      
      const Button = () => {
        // Button component logic
        return (
          <button>
            {/* Button content */}
          </button>
        );
      };
      
      Button.Icon = () => {
        // Icon component logic
        return (
          <div>
            {/* Icon content */}
          </div>
        );
      };
      
      export { Button }; `}</CodeBlock>
      <br />
      <CodeBlock>{`// Usage in another component
      import React from 'react';
      import Button from './Button';
      
      function MyComponent() {
        return (
          <Button>
            <Button.Icon /> {/* Use the Button.Icon component */}
            Button Text
          </Button>
        );
      }`}</CodeBlock>

      <Text>
        note how you can use Button.Icon after importing Button, but you cant use it independently. To use the
        subcomponent independent of whether the Component is imported, export it too. If you define Button.Icon as a
        separate export, you can import it without needing to import the entire Button component. This can be beneficial
        in scenarios where you want to use Button.Icon independently in different parts of your application without
        importing unnecessary code.
      </Text>

      <Text>
        Note: here even though we dont redeclare a new const for Button.Icon, we can export it, and use it directly
        after import without the need to import Button.
      </Text>
      <CodeBlock>{`// Some other component
import React from 'react';
import { Button, Button.Icon } from './Button'; // Import only Button.Icon

function AnotherComponent() {
  return (
    <div>
      {/* Use the Button.Icon component independently */}
      <Button.Icon />
    </div>
  );
}

export default AnotherComponent;`}</CodeBlock>

      <br />

      <Heading variation="h6">Composition</Heading>
      <Text>using Tailwind-merge, clsx (https://github.com/lukeed/clsx), cn utility helper, CVA</Text>
      <br />
      <Text>
        when a component uses multiple pieces to build up the component, import theses individual exports so you can
        place classes and other props directly on them. Otherwise, if you pass classes to a component how do you know
        which styles are meant for which part of the component? you would not know, thats why the architectural decision
        is either to have a controlled predefined props or opengates tailwind classes for each part of the component.
      </Text>
      <br />

      <Heading variation="h6">Method 1: cn / tw-merge / clsx</Heading>
      <Text>Instead of passing individual props to components...</Text>
      <CodeBlock>{`<Card color='white' borderColor='#DDD' borderRadius='10px' height='200px'/>`}</CodeBlock>

      <Text>Use classes (tailwind) instead</Text>
      <CodeBlock>{`<Card className='text-white border-gray-300 border rounded-lg h-200'/>`}</CodeBlock>
      <br />

      <Text>
        by definining type as {`HTMLProps<HTMLDivElement>`} you say that all props afforded to html div element will
        also get inherited it includes all the props that are valid for a standard HTML div element, but it does not
        include the children prop by default. here we have pre-defined className, but also receive className
        tailwind-merge solves conflicts - first arg is base classes, second is what to merge in tailwind-merge also
        allows conditional classes - which if truthy adds the classes: loading && 'bg-gray-400' it does NOT however
        support objects with key/value pair to support conditional classes - for that use 'clsx', object syntax says:
        apply this class when conditional (here its 'loading') is true: {`{ 'bg-gray-400': loading }`}
        invent of cn utility function: BUT... this does not help us make things easier.. as you still see a lot of tw
        classes and not sure what styles you are allowed to apply: and thats where CVA helps class variance authority -
        allows you to have a more pre-defined structure for styling. its opinionated and mildly restrictive but you as
        the developer sleep better. as a developer you want to be in control to a certain extent of how your component
        is allowed to be used. back to the drawing board:
      </Text>
      <CodeBlock>{`uses twMerge(clsx())  which allows clsx to pass an object like syntax as an argument for twMerge
        import {twMerge} from 'tailwind-merge';
        import {clsx, ClassValue} from 'clsx'; //classValue is the type

        export function cn(...inputs:ClassValue[] ){
          return twMerge(clsx(inputs)) //object sytax with clsx and result passed into twMerge
        }`}</CodeBlock>
      <br />

      <CodeBlock>
        {`import React from 'react';

type CardProps = {
  className?: string;
  children?: React.ReactNode | undefined;
};

export const Card: React.FC<CardProps> = ({
  className = 'flex flex-col items-stretch px-3 text-grey border-gray-300 border rounded-lg h-[300px] w-auto',
  children,
}) => {
  return <div className={className}>{children}</div>;
};`}
      </CodeBlock>
      <br />
      <Heading variation="h6">Method 2: (cn / tw-merge / clsx) + CVA</Heading>
      <Text>
        with CVA you have predefined styles which are called 'variants', each variant is a prop for the component with a
        set of values mapped to a variant
      </Text>
    </div>
  );
};

export default SystemDesign;
