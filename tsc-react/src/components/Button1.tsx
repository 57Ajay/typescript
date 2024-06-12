type color = "red" | "blue" | "green";

type ButtonProps = { 
    style: React.CSSProperties
    
};

const Button1 = ({ style } : ButtonProps) => {

  return (
    <button style={style}>
        click me
    </button>
  )
}

export default Button1;