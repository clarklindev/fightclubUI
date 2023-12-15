//get the height of the children passed in
const Scrollable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div data-component="Scrollable" className="relative bg-red-400 flex flex-row">
      {children}
    </div>
  );
};

export { Scrollable };
