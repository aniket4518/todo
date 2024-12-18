import { useRef  } from "react"
 
  
const Addtodo = ({ onnewitem}) =>{
    const todonameel=useRef()
    const duedate=useRef()
    const handeladdbutton =()=>{
        const todoname =todonameel.current.value
        const toduedate=duedate.current.value
       onnewitem(todoname,toduedate)
       duedate.current.value=""
       todonameel.current.value=""
    }
 
//  const[toduedate,settoduedate]=useState()
//  const handelonchangedate = (event)=>{
    //  settoduedate(event.target.value)
//  }
//  const[todoname,settodoname]=useState()
//  const handelonchangename = (event)=>{
 
//}
    return ( 
  <>
     
    <input placeholder="to do"   ref={todonameel}></input>
  
   
    <input type="date"   ref={duedate}/>
   
    
    <button type="button" className="btn btn-success" onClick={  handeladdbutton}>ADD</button>
    
    </>)
}
export default Addtodo