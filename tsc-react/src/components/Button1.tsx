type color = "red" | "blue" | "green";

type ButtonProps = { 
    style: React.CSSProperties
    
};

const Button1 = ({ style } : ButtonProps) => {

  return (
    <button className="rounded p-1 font-semibold" style={style}>
        click me
    </button>
  )
}

export default Button1;