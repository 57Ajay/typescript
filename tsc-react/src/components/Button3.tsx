
type ButtonProps = { 
    onClick: () => number
    
};

const Button3 = ({ onClick } : ButtonProps) => {

  return (
    <button className="bg-slate-600 rounded p-4" onClick={onClick}>
        Button 3
    </button>
  )
}

export default Button3;