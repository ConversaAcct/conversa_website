interface GhostButtonProps {
  textColor : string
  text : string
  bgColor : string
  
}

const FilledButton = (ghostButtonProps : GhostButtonProps) => {
  return(
    <button type="submit" style={{color : ghostButtonProps.textColor, backgroundColor : ghostButtonProps.bgColor}} 
    className="w-30 h-10 rounded-lg text-[12px] cursor-pointer">
         {ghostButtonProps.text}
    </button>
  )

}

export default FilledButton;