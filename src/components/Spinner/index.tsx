type SpinnerProps = {
  size?: string;
  color?: string;
};

export const Spinner = ({ size = `5`, color = 'white' }: SpinnerProps) => {
  return (
    <div data-component="Spinner" className={`w-${size} h-${size}`}>
      <div
        className={[
          `w-full h-full border-2 b-solid`,
          `border-${color}-600`,
          `border-t-transparent rounded-full animate-spin-fast`,
        ].join(' ')} //order matters
      />
    </div>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------
