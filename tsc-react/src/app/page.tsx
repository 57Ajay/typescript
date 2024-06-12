'use client';

import Button1 from "@/components/Button1"
import Button2 from "@/components/Button2"
import Button3 from "@/components/Button3"
import Button4 from "@/components/Button4";
import Button5 from "@/components/Button5";
import Button6 from "@/components/Button6";
import Button7 from "@/components/Button7";
import { useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);

  const onclick = ()=>{
    return 1
  };

  const clickHandler = ()=>{
    setCount(count+1)
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
        <Button3 onClick={onclick}/><br />
        <Button4> Hello! There</Button4><br />
        <Button5 count={count} setCount={setCount} /><br />
        <Button6 type="submit" autoFocus={true} defaultValue="test" /><br />
        <Button7 countValue={5} countHistory={[2, 4]}/>
      </main>
    </div>
  )
}

export default Home