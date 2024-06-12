import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button6 = ({ type, autoFocus, ...rest }: ButtonProps) => {
  return (
    <button className="bg-red-700 rounded p-3" type={type} autoFocus={autoFocus} {...rest}  >
        Button 6
    </button>
  )
}

export default Button6;