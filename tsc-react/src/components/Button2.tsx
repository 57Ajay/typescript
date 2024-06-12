
type ButtonProps = { 
    borderRadius: Record<string, number>
    
};

const Button2 = ({ borderRadius } : ButtonProps) => {

  return (
    <><button className='bg-white rounded p-2' style={borderRadius}>
          click me here
      </button></>
  )
}

export default Button2;