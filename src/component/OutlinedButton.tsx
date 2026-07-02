import type { ButtonProps } from "../interface/props";

  
  const OutlinedButton = (outlineButtonProps : ButtonProps) => {
    return(
      <button type="submit" style={{color : outlineButtonProps.textColor, borderColor : outlineButtonProps.bgColor}} 
      className="rounded-lg text-[13px] cursor-pointer border border-[#5B0AFF] text-[#5B0AFF] px-5 py-2.5  flex items-center gap-2 ">
           {outlineButtonProps.text}
           {outlineButtonProps.icon}
      </button>
    )
  
  }
  
  export default OutlinedButton;

