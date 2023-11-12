import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

// layouts
import { HomeLayout } from '@swagfinger/layouts/HomeLayout';

// pages
import GettingStarted from '@swagfinger/pages/GettingStarted';
import Introduction from '@swagfinger/pages/Introduction';
import SystemDesign from '@swagfinger/pages/SystemDesign';
import NotFound from '@swagfinger/pages/NotFound';

// interface
import NavbarExample from '@swagfinger/pages/Navbar';
import NavSideExample from '@swagfinger/pages/NavSide';
import OnThisPageExample from '@swagfinger/pages/OnThisPage';

//components
import HeadingExample from '@swagfinger/pages/Heading';
import TextExample from '@swagfinger/pages/Text';
import IconExample from '@swagfinger/pages/Icon';
import ButtonExample from '@swagfinger/pages/Button';
import InputExample from '@swagfinger/pages/Input';
import AccordionExample from '@swagfinger/pages/Accordion';
import RadioButtonExample from '@swagfinger/pages/RadioButton';
import RadioButtonGroupExample from '@swagfinger/pages/RadioButtonGroup';
import CheckboxExample from '@swagfinger/pages/Checkbox';
import CheckboxGroupExample from '@swagfinger/pages/CheckboxGroup';
import SelectExample from '@swagfinger/pages/Select';
import CounterExample from '@swagfinger/pages/Counter';
import ToggleButtonExample from '@swagfinger/pages/ToggleButton';
import ToggleSwitchExample from '@swagfinger/pages/ToggleSwitch';
import SnackbarExample from '@swagfinger/pages/Snackbar';
import SliderExample from '@swagfinger/pages/Slider';
import SliderMultiRangeExample from '@swagfinger/pages/SliderMultiRange';
import DividerExample from '@swagfinger/pages/Divider';
import ListExample from '@swagfinger/pages/List';
import TableExample from '@swagfinger/pages/Table';
import CardExample from '@swagfinger/pages/Card';
import ProgressLoaderExample from '@swagfinger/pages/ProgressLoader';
import SpinnerExample from '@swagfinger/pages/Spinner';
import TreeExample from '@swagfinger/pages/Tree';
import DropdownExample from '@swagfinger/pages/Dropdown';
import TabsExample from '@swagfinger/pages/Tabs';
import PaginationExample from '@swagfinger/pages/Pagination';
import ModalExample from '@swagfinger/pages/Modal';
import BreadcrumbsExample from '@swagfinger/pages/Breadcrumbs';
// Utility
import ResizePanelExample from '@swagfinger/pages/ResizePanel';
import DimensionsExample from '@swagfinger/pages/Dimensions';
import CodeBlockExample from '@swagfinger/pages/CodeBlock';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Introduction />} />

      {/* guide */}
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/gettingstarted" element={<GettingStarted />} />
      <Route path="/systemdesign" element={<SystemDesign />} />

      {/* Interface */}
      <Route path="/navbar" element={<NavbarExample />} />
      <Route path="/navside" element={<NavSideExample />} />
      <Route path="/onthispage" element={<OnThisPageExample />} />
      <Route path="/breadcrumbs" element={<BreadcrumbsExample />} />

      {/* components */}
      <Route path="/heading" element={<HeadingExample />} />
      <Route path="/text" element={<TextExample />} />
      <Route path="/icon" element={<IconExample />} />
      <Route path="/button" element={<ButtonExample />} />
      <Route path="/input" element={<InputExample />} />
      <Route path="/select" element={<SelectExample />} />
      <Route path="/accordion" element={<AccordionExample />} />
      <Route path="/radiobutton" element={<RadioButtonExample />} />
      <Route path="/radiobuttongroup" element={<RadioButtonGroupExample />} />
      <Route path="/checkbox" element={<CheckboxExample />} />
      <Route path="/checkboxgroup" element={<CheckboxGroupExample />} />
      <Route path="/counter" element={<CounterExample />} />
      <Route path="/togglebutton" element={<ToggleButtonExample />} />
      <Route path="/toggleswitch" element={<ToggleSwitchExample />} />
      <Route path="/snackbar" element={<SnackbarExample />} />
      <Route path="/slider" element={<SliderExample />} />
      <Route path="/slidermultirange" element={<SliderMultiRangeExample />} />
      <Route path="/divider" element={<DividerExample />} />
      <Route path="/list" element={<ListExample />} />
      <Route path="/table" element={<TableExample />} />
      <Route path="/card" element={<CardExample />} />
      <Route path="/progressloader" element={<ProgressLoaderExample />} />
      <Route path="/spinner" element={<SpinnerExample />} />
      <Route path="/dropdown" element={<DropdownExample />} />
      <Route path="/tree" element={<TreeExample />} />
      <Route path="/tabs" element={<TabsExample />} />
      <Route path="/pagination" element={<PaginationExample />} />
      <Route path="/modal" element={<ModalExample />} />

      {/* utility */}
      <Route path="/resizepanel" element={<ResizePanelExample />} />
      <Route path="/dimensions" element={<DimensionsExample />} />
      <Route path="/codeblock" element={<CodeBlockExample />} />

      {/* router */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>,
  ),
);
