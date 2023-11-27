//themeComponent key values should be string of tailwind classes NOT valid css

const getTailwindClassesFromThemeComponent = (themeComponent: Object) => {
  return Object.keys(themeComponent)
    .map(key => {
      return themeComponent[key as keyof typeof themeComponent];
    })
    .join(' ');
};

export { getTailwindClassesFromThemeComponent };
