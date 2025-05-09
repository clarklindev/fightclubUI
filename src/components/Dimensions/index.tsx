type DimensionsProps = {
  value: string | null | undefined;
};

export const Dimensions = (props: DimensionsProps) => {
  const { value } = props;
  return value ? (
    <div className="absolute top-[5px] left-[5px] bg-black text-white w-auto h-[30px] p-[2px]">{value}</div>
  ) : null;
};
