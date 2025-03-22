import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

// layouts
import { HomeLayout } from '@fightclub/layouts/HomeLayout';

// pages
import GettingStarted from '@fightclub/pages/GettingStarted';
import Introduction from '@fightclub/pages/Introduction';
import NotFound from '@fightclub/pages/NotFound';
import SystemDesign from '@fightclub/pages/SystemDesign';

//components
import NavbarExample from '@fightclub/pages/Navbar';
import NavSideExample from '@fightclub/pages/NavSide';
import OnThisPageExample from '@fightclub/pages/OnThisPage';
import LayoutExample from '@fightclub/pages/Layout';
import SectionExample from '@fightclub/pages/Section';

import HeadingExample from '@fightclub/pages/Heading';
import TextExample from '@fightclub/pages/Text';
import TextareaExample from '@fightclub/pages/Textarea';
import LabelExample from '@fightclub/pages/Label';
import IconExample from '@fightclub/pages/Icon';
import ButtonExample from '@fightclub/pages/Button';
import InputExample from '@fightclub/pages/Input';
import AccordionExample from '@fightclub/pages/Accordion';
import RadioButtonExample from '@fightclub/pages/RadioButton';
import RadioButtonGroupExample from '@fightclub/pages/RadioButtonGroup';
import CheckboxExample from '@fightclub/pages/Checkbox';
import CheckboxGroupExample from '@fightclub/pages/CheckboxGroup';
import SelectExample from '@fightclub/pages/Select';
import CounterExample from '@fightclub/pages/Counter';
import ToggleButtonExample from '@fightclub/pages/ToggleButton';
import ToggleSwitchExample from '@fightclub/pages/ToggleSwitch';
import SnackbarExample from '@fightclub/pages/Snackbar';
import SliderExample from '@fightclub/pages/Slider';
import SliderMultiRangeExample from '@fightclub/pages/SliderMultiRange';
import DividerExample from '@fightclub/pages/Divider';
import ListExample from '@fightclub/pages/List';
import TableExample from '@fightclub/pages/Table';
import CardExample from '@fightclub/pages/Card';
import ProgressLoaderExample from '@fightclub/pages/ProgressLoader';
import SpinnerExample from '@fightclub/pages/Spinner';
import TreeExample from '@fightclub/pages/Tree';
import DropdownExample from '@fightclub/pages/Dropdown';
import TabsExample from '@fightclub/pages/Tabs';
import PaginationExample from '@fightclub/pages/Pagination';
import ModalExample from '@fightclub/pages/Modal';
import BreadcrumbsExample from '@fightclub/pages/Breadcrumbs';
import BadgeExample from '@fightclub/pages/Badge';

// Utility
import ResizePanelExample from '@fightclub/pages/ResizePanel';
import DimensionsExample from '@fightclub/pages/Dimensions';
import CodeBlockExample from '@fightclub/pages/CodeBlock';

import type { Router } from '@remix-run/router';
export const router:Router = createBrowserRouter(
  createRoutesFromElements(
    // USE LAYOUT - HomeLayout
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Introduction />} />

      {/* guide */}
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/gettingstarted" element={<GettingStarted />} />
      <Route path="/systemdesign" element={<SystemDesign />} />

      {/* components */}
      <Route path="/navbar" element={<NavbarExample />} />
      <Route path="/navside" element={<NavSideExample />} />
      <Route path="/onthispage" element={<OnThisPageExample />} />
      <Route path="/layout" element={<LayoutExample />} />
      <Route path="/section" element={<SectionExample />} />
      <Route path="/heading" element={<HeadingExample />} />
      <Route path="/text" element={<TextExample />} />
      <Route path="/textarea" element={<TextareaExample />} />
      <Route path="/label" element={<LabelExample />} />
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
      <Route path="/breadcrumbs" element={<BreadcrumbsExample />} />
      <Route path="/badge" element={<BadgeExample />} />

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

