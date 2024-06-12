'use client';

import Button1 from "@/components/Button1"
import Button2 from "@/components/Button2"
import Button3 from "@/components/Button3"
const Home = () => {
  const onclick = ()=>{
    return 1
  }
  return (
    <div>
      <main className="min-h-screen flex justify-center items-center">
        <Button1 style={{backgroundColor: "blue", color: "red", fontSize: 12, padding: "1rem 2rem"}}/><br />
        <Button2 borderRadius={{
          topLeft: 5,
          topRight: 12, 
          bottomRight: 11,
          bottonLeft: 10
        }}/><br />
        <Button3 onClick={onclick}/>
      </main>
    </div>
  )
}

export default Home