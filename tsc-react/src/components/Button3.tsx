
type ButtonProps = { 
    onClick: () => number
    
};

const Button3 = ({ onClick } : ButtonProps) => {

  return (
    <button onClick={onClick}>
        click me
    </button>
  )
}

export default Button3;