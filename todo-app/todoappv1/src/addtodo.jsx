import { useState } from "react"
 
  
const Addtodo = ({ onnewitem}) =>{
    const handeladdbutton =()=>{
       onnewitem(todoname,toduedate)
       settoduedate("")
       settodoname( "")
    }
 
 const[toduedate,settoduedate]=useState()
 const handelonchangedate = (event)=>{
     settoduedate(event.target.value)
 }
 const[todoname,settodoname]=useState()
 const handelonchangename = (event)=>{
     settodoname(event.target.value)
 }
    return ( 
  <>
     
    <input placeholder="to do" value={todoname}onChange={handelonchangename}></input>
  
   
    <input type="date" value={toduedate} onChange={handelonchangedate}/>
   
    
    <button type="button" className="btn btn-success" onClick={  handeladdbutton}>ADD</button>
    
    </>)
}
export default Addtodo