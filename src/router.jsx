import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

// layouts
import { HomeLayout } from './layouts/HomeLayout';

// pages
import Introduction from './pages/Introduction';
import GettingStarted from './pages/GettingStarted';
import Routing from './pages/Routing';
import Styling from './pages/Styling';
import Themes from './pages/Themes';
import NotFound from './pages/NotFound';

//components
import LayoutExample from './components/Layout/example';
import HeadingExample from './components/Heading/example';
import TextExample from './components/Text/example';
import IconExample from './components/Icon/example';
import LabelSomethingExample from './components/LabelSomething/example';
import ButtonExample from './components/Button/example';
import InputExample from './components/Input/example';
import AccordionExample from './components/Accordion/example';
import RadioButtonExample from './components/RadioButton/example';
import RadioButtonGroupExample from './components/RadioButtonGroup/example';
import CheckboxExample from './components/Checkbox/example';
import CheckboxGroupExample from './components/CheckboxGroup/example';
import SelectExample from './components/Select/example';
import CounterExample from './components/Counter/example';
import ToggleButtonExample from './components/ToggleButton/example';
import ToggleSwitchExample from './components/ToggleSwitch/example';
import SnackbarExample from './components/Snackbar/example';
import SliderExample from './components/Slider/example';
import SliderMultiRangeExample from './components/SliderMultiRange/example';
import SeparatorExample from './components/Separator/example';
import ListExample from './components/List/example';
import TableExample from './components/Table/example';
import CardExample from './components/Card/example';
import TreeExample from './components/Tree/example';
import HooksExample from './customhooks/example';
import ProgressLoaderExample from './components/ProgressLoader/example';
import SpinnerExample from './components/Spinner/example';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Introduction />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/gettingstarted" element={<GettingStarted />} />
      <Route path="/routing" element={<Routing />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/styling" element={<Styling />} />
      <Route path="/layout" element={<LayoutExample />} />
      <Route path="/heading" element={<HeadingExample />} />
      <Route path="/text" element={<TextExample />} />
      <Route path="/icon" element={<IconExample />} />
      <Route path="/labelsomething" element={<LabelSomethingExample />} />
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
      <Route path="/separator" element={<SeparatorExample />} />
      <Route path="/list" element={<ListExample />} />
      <Route path="/table" element={<TableExample />} />
      <Route path="/card" element={<CardExample />} />
      <Route path="/tree" element={<TreeExample />} />
      <Route path="/hooks" element={<HooksExample />} />
      <Route path="/progressloader" element={<ProgressLoaderExample />} />
      <Route path="/spinner" element={<SpinnerExample />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>,
  ),
);
