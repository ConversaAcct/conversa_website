import type { ButtonProps } from "../interface/props";


const FilledButton = (filledButtonProps : ButtonProps) => {
  return(
    <button type="submit" style={{color : filledButtonProps.textColor, backgroundColor : filledButtonProps.bgColor}} 
    className="w-30 h-10 rounded-lg text-[13px] cursor-pointer">
         {filledButtonProps.text}
    </button>
  )

}

export default FilledButton;