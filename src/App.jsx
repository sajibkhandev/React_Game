import React, { useState } from 'react'

export default function App() {
  let [button,setButton]=useState(true)
  let [input1,setInput1]=useState("")
  let [input2,setInput2]=useState("")
  let [heading,setHeading]=useState("Player One")
  let [count,setCount]=useState(5)
  let [hide,setHide]=useState(true)
  let [error,setError]=useState("")
  

  let hendleInput1=(e)=>{
    setInput1(e.target.value);
  }
  let hendleInput2=(e)=>{
    setInput2(e.target.value);
  }

  let hendleStart=()=>{
    if(input1.length<=0){
      setError("Enter Something");
    }else if(isNaN(input1)){
      setError("Enter a Number");
    }else if(input1<=10 && input1>0){
      setInput2("")
      setButton(false)
      setHeading("Player Two")
      setError("")

    }else{
      setError("Enter a number 1 To 10");
    }
   
    
  }
  let hendleCheck=()=>{
    if(input2.length<=0){
      setError("Enter Something");
    }else if(isNaN(input2)){
      setError(("Enter a Number"));
    }else if(input2<=10 && input2>0){
      setError("")
      if(count>1){
        count--
        setCount(count)
        if(input1==input2){
        setHeading("Player Two Winner");
        setHide(false)
        
      }
      }else{
        count=0
        setCount(count)
        setHeading("Player One Winner");
        setHide(false)
      }

    }else {
      setError("Enter a number 1 to 10");
    }
    
  }
  return (
    <>
    <div className='bg-black py-16 md:py-[130px] h-screen'>
      <div className='bg-[#FF00FF] mx-auto max-w-[700px] p-[50px]'>
      <h1 className='text-white text-center font-bold text-3xl md:text-5xl pb-6 md:pb-12'>{heading}</h1>
    {!button&&<h2 className='text-white text-center font-bold text-3xl pb-6'>Chance: {count}</h2>}
    <h2 className='text-white text-center font-semibold text-2xl pb-4'>{error}</h2>
    
    {
      button?
      <input className='mx-auto block w-[250px] md:w-[350px] py-[2px] px[10px] md:text-[30px] text-center outline-0' type="password" onChange={hendleInput1} value={input1} />:
      <input className='mx-auto block w-[250px] md:w-[350px] py-[2px] px[10px] md:text-[30px] text-center outline-0' type="text" onChange={hendleInput2} value={input2} />
    }
   <div className='text-center py-[30px]'>
   {
      hide&&(button?
    <button className='py-2 px-6 md:py-[10px] md:px-[30px] bg-black text-white  font-bold text-base md:text-xl inline-block' onClick={hendleStart}>Start</button>:
    <button className='py-2 px-6 md:py-[10px] md:px-[30px] bg-black text-white  font-bold text-base md:text-xl inline-block' onClick={hendleCheck}>Check</button>)
    }
   </div>
      </div>
    </div>
    </>
  )
}
