import type { ReactNode } from "react"

export interface ButtonProps {
    textColor : string
    text : string
    bgColor : string
    icon?: ReactNode
    href? : string
    
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

export type MenuItem = {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  link : string;
};


export type CountryDropdownProps = {
  id: string;
  placeholder: string;
  options: string[];
  value: string;
  name: string;
  onChange: (value: string) => void;
};

export type DropdownProps = {
  id: string;
  placeholder: string;
  options: string[];
  value: string;
  name : string;
  onChange: (value: string) => void;
};
