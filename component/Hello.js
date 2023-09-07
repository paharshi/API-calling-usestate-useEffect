import { useEffect, useState } from "react"

function Hello (){
    const[timer,setTimer]=useState(0)

    useEffect(
        ()=>{
            console.log("Inside use effect")
        }
    )
    return(
          <div>
            <h1>Timer:{timer} {console.log("Inside Component")}</h1>
            <button onClick={()=>{
               setTimer(timer+1)
            }}>Update Timer</button>
          </div>
    )
}
export default Hello