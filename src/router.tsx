import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

// layouts
import { HomeLayout } from './layouts/HomeLayout';

// pages
import GettingStarted from './pages/GettingStarted';
import Introduction from './pages/Introduction';
import NotFound from './pages/NotFound';
import SystemDesign from './pages/SystemDesign';

//components
import NavbarExample from './pages/Navbar';
import NavSideExample from './pages/NavSide';
import OnThisPageExample from './pages/OnThisPage';
import LayoutExample from './pages/Layout';
import SectionExample from './pages/Section';

import CalendarExample from './pages/Calendar';
import DatepickerExample from './pages/Datepicker';
import HeadingExample from './pages/Heading';
import TextExample from './pages/Text';
import TextareaExample from './pages/Textarea';
import LabelExample from './pages/Label';
import IconExample from './pages/Icon';
import ButtonExample from './pages/Button';
import InputExample from './pages/Input';
import InputOtpExample from './pages/InputOtp';
import PopoverExample from './pages/Popover';
import AccordionExample from './pages/Accordion';
import RadioButtonExample from './pages/RadioButton';
import RadioButtonGroupExample from './pages/RadioButtonGroup';
import CheckboxExample from './pages/Checkbox';
import CheckboxGroupExample from './pages/CheckboxGroup';
import SelectExample from './pages/Select';
import CounterExample from './pages/Counter';
import ToggleButtonExample from './pages/ToggleButton';
import ToggleSwitchExample from './pages/ToggleSwitch';
import SliderExample from './pages/Slider';
import SliderMultiRangeExample from './pages/SliderMultiRange';
import DividerExample from './pages/Divider';
import ListExample from './pages/List';
import TableExample from './pages/Table';
import CardExample from './pages/Card';
import ProgressLoaderExample from './pages/ProgressLoader';
import SpinnerExample from './pages/Spinner';
import TreeExample from './pages/Tree';
import DropdownExample from './pages/Dropdown';
import TabsExample from './pages/Tabs';
import PaginationExample from './pages/Pagination';
import DialogExample from './pages/Dialog';
import BreadcrumbsExample from './pages/Breadcrumb';
import BadgeExample from './pages/Badge';
import AvatarExample from './pages/Avatar';

// Utility
import ResizePanelExample from './pages/ResizePanel';
import DimensionsExample from './pages/Dimensions';
import CodeBlockExample from './pages/CodeBlock';

import type { Router } from '@remix-run/router';
export const router: Router = createBrowserRouter(
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
      <Route path="/inputotp" element={<InputOtpExample />} />
      <Route path="/popover" element={<PopoverExample />} />
      <Route path="/select" element={<SelectExample />} />
      <Route path="/calendar" element={<CalendarExample />} />
      <Route path="/datepicker" element={<DatepickerExample />} />
      <Route path="/accordion" element={<AccordionExample />} />
      <Route path="/radiobutton" element={<RadioButtonExample />} />
      <Route path="/radiobuttongroup" element={<RadioButtonGroupExample />} />
      <Route path="/checkbox" element={<CheckboxExample />} />
      <Route path="/checkboxgroup" element={<CheckboxGroupExample />} />
      <Route path="/counter" element={<CounterExample />} />
      <Route path="/togglebutton" element={<ToggleButtonExample />} />
      <Route path="/toggleswitch" element={<ToggleSwitchExample />} />
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
      <Route path="/dialog" element={<DialogExample />} />
      <Route path="/breadcrumbs" element={<BreadcrumbsExample />} />
      <Route path="/badge" element={<BadgeExample />} />
      <Route path="/avatar" element={<AvatarExample />} />

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
