type color = "red" | "blue" | "green";

type ButtonProps = { 
    style: {
        backgroundColor: color,
        textColor: color
        fontSize: number,
    }
    
};

const Button = ({ style } : ButtonProps) => {

  return (
    <button style={style}>
        click me
    </button>
  )
}

export default Button