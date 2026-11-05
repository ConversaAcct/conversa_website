
type ColorTagProps = {
  text: string;
  textColor?: string;
  dotColor?: string;
  bgColor?: string;
};

const ColorTag = ({
  text,
  textColor,
  dotColor,
  bgColor,
}: ColorTagProps) => {
  return (
    <div
      className="inline-flex items-center md:gap-2 gap-1 rounded-full px-2 md:px-4 py-2"
      style={{ backgroundColor: bgColor }}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: dotColor }}
      />
      <span
        className="text-[12px] md:text-[14px] font-medium leading-none font-manrope whitespace-nowrap"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );
};

export default ColorTag;