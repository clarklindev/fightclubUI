import { Heading, Text, CodeBlock, Layout, List } from '@fightclub/components';
import { CodeInline } from '@fightclub/components/CodeInline';
import { Link } from 'react-router-dom';

const SystemDesign = () => {
  return (
    <article>
      <Layout>
        <Heading as="h1" size="level1" data-observable="true">
          System Design
        </Heading>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          A separate repository for component code
        </Heading>
        <Text>
          In theory, the workflow should have source code seperation from documentation to keep a small size footprint.
          Although the steps below will outline a similar workflow, only one repository is maintained and from there all
          actions are executed. So this means we still push npm updates to the npm module, and in the same repository
          are we using the npm library in our documentation code; we import code from npm alias paths (vite.config.ts)
          into files (not relative folder paths). Idealy, one reason PRO separating the repository into source vs
          documentation repository would be that developers can maintain their code separately from the documentation
          maintainers. Another reason PRO separation is to keep intellectual property separate from documentation
          maintainers so the library that is used only has compiled down code with the typscript doc types (.d.ts)
          included. The CON is it is more tedious and harder to maintain 2 repositories as everytime you make a change
          to the component source repository, you need to follow these steps:
          <br />
          1. make a commit
          <br />
          2. push to npm as a package
          <br />
          3. the repo using the npm package needs to update the module package versioning to reflect latest update
          <br />
          4. the library using the updated npm package doesnt access components via relative folder path; but it rather
          uses esmodule import syntax that uses the npm library
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          publishing a npm library
        </Heading>
        <CodeInline
          value={`

//create package
//For an organization-scoped package, replace my-org with the name of your organization
npm init --scope=@my-org

//npm organization packages are scoped and private by default to publish as public
npm publish --access=public

//git add step, git commit step, git push step
npm run build
npm run build-preview

//Login
npm login

git add .
git commit -m ""

//auto version incrementing
npm version patch

git push origin master

//Git push changes (including tags):
git push --tags

//publish the package
npm publish --access=public

//then update the package.json
and recommit
re-push


`}
        />
      </Layout>
      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Routing
        </Heading>
        <Link to="https://github.com/fightclub/template-react-router-6">react-router-dom</Link>
        <br />
        <Link to="https://nextjs.org/docs/routing/introduction">NextJS</Link>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Validation
        </Heading>
        <p>you can consider using:</p>
        <Link to="https://zod.dev/">https://zod.dev/</Link>
        <br />
        <Link to="https://validatejs.org/">https://validatejs.org/</Link>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Layout
        </Heading>

        <Link to="https://tailwindui.com/documentation">TailwindCSS</Link>
        <br />
        <Link to="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids">CSS Grid</Link>
        <br />
        <Link to="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">CSS Flexbox</Link>
        <br />
        <br />

        <Text>
          With layout using css grid, sometimes its better not to specify any css. eg. if you have 1 column, 1 row (that
          later at a high media query breakpoint becomes complex grid layout), it is better to not have any styles and
          only specify at that higher breakpoint where you specify the grid layouts 'grid-template-columns'.
        </Text>
        <Text>
          Components should take into consideration when it has 'overflow: hidden', this may possibly hide child
          components which overflow its dimensions.
          <br />
          <CodeInline value="src/layouts/HomeLayout.tsx" /> is an example of a page layout and more can be created
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Adding Pages
        </Heading>
        <Heading as="h3" size="level3" data-observable="true">
          1. Adding nav link Using react-router-dom 6
        </Heading>
        <Text>
          The first step to adding a page on the interface so that it appears as a navigation link is to look inside:
          <br />
          <CodeInline
            value={`// src/layouts/HomeLayout.tsx            
<NavSide.Link to="page">Adding pages</NavSide.Link>`}
          />
        </Text>

        <Heading as="h3" size="level3" data-observable="true">
          2. Register a route
        </Heading>
        <Text>
          The "to" prop is the route path. To add the route, look inside:
          <br />
          <CodeInline
            value={`//src/router.ts  
import PageExample from '@fightclub/pages/Page';  
<Route path="/page" element={<PageExample />} /></Layout>
`}
          />
        </Text>

        <Heading as="h3" size="level3" data-observable="true">
          3. Add the actual page
        </Heading>
        <Text>
          add the page to 'src/pages/', in the previous step, we imported Page from '/pages/Page'
          <br />
          <CodeInline value={`import PageExample from '@fightclub/pages/Page';`} />
          so create a folder named 'Page', inside 'src/pages/'.
          <br />
          Here is index.tsx template code to start you off:
          <br />
          <CodeInline
            value={`
import React from 'react';
import { CodeBlock, Heading, Text } from '@fightclub/components';

const Page = () => {
    return (
        <div>
            <Heading as="h1" data-observable="true">Adding Pages</Heading>
        </div>
    );
};

export default Page;              
`}
          />
        </Text>

        <Heading as="h3" size="level3" data-observable="true">
          4. Link with "On this page"
        </Heading>
        <Text>
          To link up and add items to "On this page" side component, you add
          <br />
          <CodeInline value={`data-observable="true"`} /> to Heading component and it will use the Heading text value as
          the header text:
          <br />
          <CodeInline value={`<Heading as="h1" data-observable="true">Adding Pages</Heading>`} />
        </Text>
      </Layout>
      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Handling Forms
        </Heading>
        <Text>
          Components that can be incorporated into a form include:
          <br />
          <ul>
            <li>TextArea</li>
            <li>Input</li>
            <li>Select</li>
            <li>RadioButton</li>
            <li>RadioButtonGroup</li>
            <li>Checkbox</li>
            <li>CheckboxGroup</li>
            <li>Counter</li>
            <li>ToggleButton</li>
            <li>ToggleSwitch</li>
            <li>Slider</li>
            <li>SliderMultiRange</li>
            <li>Datepicker</li>
          </ul>
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Accessability
        </Heading>
        <Text>Components are designed with accessibility in mind.</Text>
      </Layout>
      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Styling
        </Heading>
        <Text>
          The main reason this component library was created, was to address the support for variants and props AND the
          ability to use Tailwindcss to style components.
        </Text>
        <Text>
          It removes the need to pass props into styled components before being able to set the style by allowing you to
          set tailwind classes directly from the html.
        </Text>
        <Text>
          The dark-mode toggle adjusts the CSS 'color-scheme' property, and components and svg icons adapt based on
          'currentColor'.
        </Text>
        <Text>
          Theming takes precedence over default styling; however, tailwind classes applied to component override theming
          and variant props.
        </Text>
        <Text>
          By exposing component's subcomponents we are allowing styling to be set directly on the sub components
          eliminating the need to pass styles as props.
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Themes
        </Heading>
        <Text>Supports theming</Text>
      </Layout>
      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Icons
        </Heading>
        <Text>
          SVG vector icons are the way to go, there are many icon libraries, Using{' '}
          <Link to="https://react-icons.github.io/react-icons/">react-icons</Link> allows you to switch and pick icons
          from various libraries as you wish without having to build your own icon library as these libraries are
          usually well-maintained by their creators and this is the preferable option.
          <br />
          With icon libraries, even though we are using external libraries and importing these icons, it is better to
          have an icon folder / file to export from and reference. This allows us to have a centralized point in which
          we can swop out icons from 3rd party libraries even though the code always points to the same reference.
          <br />
        </Text>
        <Text>
          using <Link to="https://react-icons.github.io/react-icons/">react-icons</Link>
        </Text>
        <Text>
          Icons vs Icons library, Icons used in interface components are actually a necessity they are part of the
          library because they are required for components to work. Whereas an icon library is icons used as assets when
          developing using the design system. There should be a separation between the two as an icon library is
          technically optional third-party dependency but icons required for your components are non-negotiably
          required.
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Bundler
        </Heading>
        <Text>Using Vite to compile and bundle code - it uses es modules and its fast.</Text>
      </Layout>
      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Module alias
        </Heading>
        <Text>created aliases for links so that instead of using relative pathing, you can use absolute path</Text>
        <Text>This is made possible via creating aliases for path in vite.config.ts:</Text>
        <CodeInline
          value={`
    //vite.config.ts (snippet)

    resolve: {
        alias: {
            '@fightclub': path.resolve(__dirname, './src'),
        },
    },
        `}
        />
        <Text>And tsconfig.ts</Text>
        <CodeInline
          value={`
    //tsconfig.ts (snippet)

    "baseUrl": "./",
    "paths": {
    "@fightclub/*": ["./src/*"]
    },
        `}
        />
        <Text>Which simplifies importing dependency modules from relative pathing: </Text>
        <CodeInline value={`import { Heading, CodeBlock, Tabs } from '../components';`} />
        <Text>to this (Absolute pathing)</Text>
        <CodeInline value={`import { Heading, CodeBlock, Tabs } from '@fightclub/components';`} />
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Static assets
        </Heading>
        <Text>
          Vite helps you to copy any files placed in public/ folder as static assets; On build, it will copy these files
          into dist/ folder (as is). However, vite will also by default optimises any static assets placed in public/
          folder, meaning it will also be copied to dist/assets/ folder optimized (with appended filename suffixes for
          cache-busting) thus a duplication of files. depending on the href path, the index template uses the /public/
          folder to reference optimized files, or '/' absolute path for unoptimized.
        </Text>
        <CodeInline
          value={`<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> //this is not optimised
<link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" /> //this is optimised`}
        />
        <Text>
          To not have duplication of files (ie. only use optimized cache busting filenaming), dont use the public
          folder, name asset folder as something else eg. 'static-assets' and reference that from index.html eg.
        </Text>
        <CodeInline
          value={`<link rel="icon" type="image/png" sizes="16x16" href="/static-assets/favicon-16x16.png" /> //this is optimised`}
        />

        <Text>
          vite.config.ts - The "assetsDir" configuration option in a Vite project specifies the directory where your
          static assets, such as images, fonts, and other non-JavaScript or non-CSS files, are located (default is
          'assets' - if you don't specify the assetsDir option in your Vite configuration, Vite will assume that your
          static assets are located in an 'assets' directory at the root of your project). When you set assetsDir to a
          specific directory name, Vite will treat that directory as the source for static assets, and it will be copied
          to the build output directory (typically dist) during the build process.
        </Text>
        <Text>
          The solution that works for me is not to use a public directory and let vite optimise files - use the config
          'assetsDir'. Note: assetsDir: 'static-assets', has no effect in library mode (only works for
          vite.config.preview). Vite's Library Mode focuses on bundling and distributing JavaScript code as a library or
          module, and asset handling in the consumer's project is typically separate from your library's
          responsibilities. In library mode you will need to instruct user to make assets available in their project's
          directory structure (copy assets from x to y folder) or served via a CDN.
        </Text>
        <Text>
          If you are struggling to deploy your build (eg. seeing blank white page on vercel), you need to ensure that
          you can run the command: 'npm run build-preview' without errors as this is the production build files.
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Darkmode
        </Heading>
        <Text>
          Darkmode is a variation of each theme, themes are independent of each other but they all have their own
          light/dark mode.
        </Text>
        <Text>System preference setting just takes the mode that is set on the system.</Text>
        <Text>
          because using custom attributes on html element like [data-color-scheme='dark'] read documentation
          https://tailwindcss.com/docs/dark-mode#customizing-the-class-name
        </Text>
        <Text>
          Really like this transitioning button for the darkmode button, might implement but will think about it as I
          would prefer something cleaner: https://codepen.io/chriscoyier/pen/gOQPqBj
        </Text>
      </Layout>

      <Layout>
        <Heading as="h3" size="level2" data-observable="true">
          Scrollbars
        </Heading>
        <Text>
          If you want to customize scrollbars at component level using css modules:
          <br />
          (note the ampersand before the double colon)
        </Text>
        <CodeInline
          value={`
    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }

    &::-webkit-scrollbar-track {
    background-color: transparent; /* Fully transparent */
    background-color: var(--clr-background);
    }

    &::-webkit-scrollbar-thumb {
    background: var(--thumb-default);
    border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
    background: var(--thumb-hover);
    }

`}
        />
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Component Design
        </Heading>
        <Heading as="h3" size="level2">
          An evolution of component design
        </Heading>
        <Text>
          Current perceived best practice is to use compound components, especially when building component libraries
          that need to have design flexibility. React has a concept of context that allows passing of state though the
          component hierarchy without the need to pass them as props. Context allows you to predefine and hide the
          underlying wiring of event handling. It promotes modular component composition and this component library has
          evolved from the easier but more difficult to customize approach which uses props which become a nightmare to
          maintain and eventually bloats into a mess which developers are hesitant to maintain.
        </Text>
        <Text>
          Components should be accessible, following accessibility best practices using guidelines:
          https://www.w3.org/WAI/ARIA/apg/patterns/
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Referencing
        </Heading>
        <Text>
          Components should have reference so they are accesible from higher up the component render chain, <br />
          for reference: https://react.dev/reference/react/forwardRef
        </Text>
        <Text>
          references to props that are not normal html element attributes should use the data- props formatted like
          [data-*]
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Positioning
        </Heading>
        <Text>components are placed in relation to their parents orientation (eg. column / row)</Text>
        <Text>
          InterLayout observer: for drop-down components - use InterLayoutObserver to check if component is on top half
          or bottom half of screen realestate and then depending on that, you show the pop-up menu / content on the
          opposite hemisphere or depending if there is space (check the current position of focus element) and the
          height of the popup and if that added together is less than available space to the bottom of the screen, then
          you can show it in the same hemisphere.
        </Text>
        <Text>
          InterLayout observer: another use of interLayout observer is the aside menu Layout 'on this page' that lists
          the contents of the page, when the heading reaches the page, the title should highlight on the aside menu.
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Modals
        </Heading>
        <Text>
          Modals should make use of React's portals: <br />
          https://react.dev/reference/react-dom/createPortal
        </Text>
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Focus
        </Heading>
        <Text>when components receive focus, it uses Tailwind focus ring instead of styling :focus.</Text>
        <Text>for this to happen we change component on focus to outline: none;</Text>
        <Text>
          where possible use the useHoverFocus hook, it has support for both mobile clicking and hovering on larger
          screens
        </Text>
        <br />
        <Heading as="h3" size="level2">
          using :focus
        </Heading>
        <CodeInline
          value={`button:focus {
    outline-width: 3px;
    outline-style: dashed;
    outline-color: orange;
    outline-offset: 10px;
}`}
        />
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Modular component structure
        </Heading>
        <Text>
          Components should be designed in such a way that it promotes modularity. If you've every seen that syntax
          {`<Button.Icon>`}, whats happening is logical grouping (helpful with Readability) of Button and its
          sub-components. if you export 'Button', when used in code, you can reference subcomponents via Button eg.
          {`<Button.Icon>`}. when you define <CodeInline value={`Button.Icon = () => { ... }`} /> you are not including
          the const keyword because you are not declaring a new variable. Instead, you are adding a property named Icon
          to the existing Button object. This is a way to extend the Button component by adding functionality (in this
          case, the Icon sub-component) without re-declaring a new variable or component. When you use this module in
          other parts of your application, you can access the Button.Icon component as a nested component of Button.
          This can be shown via example:
        </Text>
        <CodeInline
          value={`// Button.js

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

    export { Button }; `}
        />

        <CodeInline
          value={`// Usage in another component
    import React from 'react';
    import Button from './Button';

    function MyComponent() {
    return (
        <Button>
        <Button.Icon /> {/* Use the Button.Icon component */}
        Button Text
        </Button>
    );
    }`}
        />

        <Text>
          note how you can use Button.Icon after importing Button, but you cant use it independently. To use the
          subcomponent independent of whether the Component is imported, export it too. If you define Button.Icon as a
          separate export, you can import it without needing to import the entire Button component. This can be
          beneficial in scenarios where you want to use Button.Icon independently in different parts of your application
          without importing unnecessary code.
        </Text>
        <Text>
          Note: here even though we dont redeclare a new const for Button.Icon, we can export it, and use it directly
          after import without the need to import Button.
        </Text>
        <CodeInline
          value={`// Some other component
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

    export default AnotherComponent;`}
        />
      </Layout>

      <Layout>
        <Heading as="h2" size="level2" data-observable="true">
          Composition
        </Heading>
        <Text>using Tailwind-merge, clsx (https://github.com/lukeed/clsx), cn utility helper, CVA</Text>
        <Text>
          when a component uses multiple pieces to build up the component, import theses individual exports so you can
          place classes and other props directly on them. Otherwise, if you pass classes to a component how do you know
          which styles are meant for which part of the component? you would not know, thats why the architectural
          decision is either to have a controlled predefined props or opengates tailwind classes for each part of the
          component.
        </Text>
        <br />
        <Heading as="h3" size="level3">
          Method 1: cn / tw-merge / clsx
        </Heading>
        <Text>Instead of passing individual props to components...</Text>
        <CodeInline value={`<Card color='white' borderColor='#DDD' borderRadius='10px' height='200px'/>`} />
        <Text>Use classes (tailwind) instead</Text>
        <CodeInline value={`<Card className='text-white border-gray-300 border rounded-lg h-200'/>`} />
        <Text>
          by definining type as {`HTMLProps<HTMLDivElement>`} you say that all props afforded to html div element will
          also get inherited it includes all the props that are valid for a standard HTML div element, but it does not
          include the children prop by default. here we have pre-defined className, but also receive className
          tailwind-merge solves conflicts - first arg is base classes, second is what to merge in tailwind-merge also
          allows conditional classes - which if truthy adds the classes: loading && 'bg-gray-400' it does NOT however
          support objects with key/value pair to support conditional classes - for that use 'clsx', object syntax says:
          apply this class when conditional (here its 'loading') is true: {`{ 'bg-gray-400': loading }`}
          invent of cn utility function: BUT... this does not help us make things easier.. as you still see a lot of tw
          classes and not sure what styles you are allowed to apply: and thats where CVA helps class variance authority
          - allows you to have a more pre-defined structure for styling. its opinionated and mildly restrictive but you
          as the developer sleep better. as a developer you want to be in control to a certain extent of how your
          component is allowed to be used. back to the drawing board:
        </Text>
        <CodeInline
          value={`//uses twMerge(clsx())  which allows clsx to pass an object like syntax as an argument for twMerge
import {twMerge} from 'tailwind-merge';
import {clsx, ClassValue} from 'clsx'; //classValue is the type

export function cn(...inputs:ClassValue[] ){
return twMerge(clsx(inputs)) //object sytax with clsx and result passed into twMerge
}`}
        />
        <CodeInline
          value={`import React from 'react';

type CardProps = {
className?: string;
children?: React.ReactNode | undefined;
};

export const Card = ({
className = 'flex flex-col items-stretch px-3 text-gray border-gray-300 border rounded-lg h-[300px] w-auto',
children,
}:CardProps) => {
return <div className={className}>{children}</div>;
};`}
        />
        <Heading as="h3" size="level3">
          Method 2: (cn / tw-merge / clsx) + CVA
        </Heading>
        <Text>
          with CVA you have predefined styles which are called 'variants', each variant is a prop for the component with
          a set of values mapped to a variant
        </Text>
        <br />
        <Heading as="h3" size="level3">
          Uncategorized
        </Heading>
        <Text>
          Component context - can reside within the component itself, you pass the actual children through to the
          Component so the context acts as a wrapper within the component. Depending on usage case, this encapsulates
          the internals and tucks away the wiring of passing props and managing state.
        </Text>
        <Text>
          if you import a context, and the way its implemented inside the component, if you return the rendered
          component wrapped in context, the js part has no access to the context. have a look at the Toggle component
          and its use of context.
        </Text>
      </Layout>
    </article>
  );
};

export default SystemDesign;
