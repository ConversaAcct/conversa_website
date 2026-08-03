import { Link } from "react-router-dom";
import type { ButtonProps } from "../interface/props";

const FilledButton = (filledButtonProps: ButtonProps) => {
  const { text, textColor, bgColor, href } = filledButtonProps;

  const sharedStyle = { color: textColor, backgroundColor: bgColor };
  const sharedClassName =
    "w-30 h-10 rounded-lg text-[13px] cursor-pointer flex items-center justify-center";

  if (href) {
    return (
      <Link to={href} style={sharedStyle} className={sharedClassName}>
        {text}
      </Link>
    );
  }

  return (
    <button type="submit" style={sharedStyle} className={sharedClassName}>
      {text}
    </button>
  );
};

export default FilledButton;