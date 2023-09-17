import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Navigate } from 'react-router-dom';

// layouts
import { HomeLayout } from './layouts/HomeLayout';
// pages
import Introduction from './pages/Introduction';
import GettingStarted from './pages/GettingStarted';
import Routing from './pages/Routing';
import Styling from './pages/Styling';
import Themes from './pages/Themes';
import NotFound from './pages/NotFound';
import LayoutExample from './pages/Layout';
import HeadingExample from './pages/Heading';
import TextExample from './pages/Text';
import IconExample from './pages/Icon';
import LabelSomethingExample from './pages/LabelSomething';
import ButtonExample from './pages/Button';
import InputExample from './pages/Input';
import AccordionExample from './pages/Accordion';
import RadioButtonExample from './pages/RadioButton';
import RadioButtonGroupExample from './pages/RadioButtonGroup';
import CheckboxExample from './pages/Checkbox';
import CheckboxGroupExample from './pages/CheckboxGroup';
import SelectExample from './pages/Select';
import CounterExample from './pages/Counter';
import ToggleButtonExample from './pages/ToggleButton';
// import ToggleSwitchExample from './pages/ToggleSwitch';
import SnackbarExample from './pages/Snackbar';
import SliderExample from './pages/Slider';
// import SliderMultiRangeExample from './pages/SliderMultiRange';
import SeparatorExample from './pages/Separator';
import ListExample from './pages/List';
// import TableExample from './pages/Table';
import CardExample from './pages/Card';
// import TreeExample from './pages/Tree';
import ProgressLoaderExample from './pages/ProgressLoader';
import SpinnerExample from './pages/Spinner';
import HooksExample from './pages/customhooks';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Introduction />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/gettingstarted" element={<GettingStarted />} />
      <Route path="/routing" element={<Routing />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/styling" element={<Styling />} />
      <Route path="/hooks" element={<HooksExample />} />
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
      {/* <Route path="/toggleswitch" element={<ToggleSwitchExample />} /> */}
      <Route path="/snackbar" element={<SnackbarExample />} />
      <Route path="/slider" element={<SliderExample />} />
      {/* <Route path="/slidermultirange" element={<SliderMultiRangeExample />} /> */}
      <Route path="/separator" element={<SeparatorExample />} />
      <Route path="/list" element={<ListExample />} />
      {/* <Route path="/table" element={<TableExample />} /> */}
      <Route path="/card" element={<CardExample />} />
      {/* <Route path="/tree" element={<TreeExample />} /> */}
      <Route path="/progressloader" element={<ProgressLoaderExample />} />
      <Route path="/spinner" element={<SpinnerExample />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Route>,
  ),
);
