
type ButtonProps = { 
    children: React.ReactNode
    
};

const Button4 = ({ children } : ButtonProps) => {

  return (
    <button className="bg-zinc-500 border-spacing-1 rounded-md p-3">
        {children}
    </button>
  )
}

export default Button4;