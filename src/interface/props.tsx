import type { ReactNode } from "react"

export interface ButtonProps {
    textColor : string
    text : string
    bgColor : string
    icon?: ReactNode
    
  }

  export interface ResultsPanelProps {
    missedCalls: number;
    visitValue: number;
}


export  interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  min?: number;
}