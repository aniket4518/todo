import "bootstrap/dist/css/bootstrap.min.css"
import Container from "./container"
import Addtodo from "./addtodo"
import Itemlist from "./itemlist"
import { useState } from "react"
 

function App() {
   
const [todoitem,settodoitem]=useState([
  {
   name:"go to school ",
   duedate: "10/11/24",
  },
  {
   name:"study" ,
   duedate: "11/11/24",
  },
  {
   name:"sleep ",
   duedate: "12/11/24",
  }
])
 
 
 
 
const handelonclick=(todoname,toduedate)=>{
  console.log(`${todoname} ${toduedate}`)
 const newitem = [...todoitem ,
  { name:todoname , duedate:toduedate},]
  settodoitem(newitem)
}
const handeldelete=(itemname)=>{
 const newitem= todoitem.filter(item=>item.name!==itemname)
 settodoitem(newitem)
}
  return (
    <>
      <h1 className="text-center"> TODO APP</h1>
       <Container> 
         <Addtodo  onnewitem={handelonclick}></Addtodo>
          <Itemlist todoitem={todoitem} handeldelete={handeldelete}  ></Itemlist>
            {/* <div className="col"> college</div>
            <div className="col"> 11/12/24</div>
            <div className="col"> 
            <button type="button" className="btn btn-danger">Delete</button>
            </div>
            <div className="col"> coding</div>
            <div className="col"> 12/12/24</div>
            <div className="col"> 
            <button type="button" className="btn btn-danger">Delete</button>
            </div>
  </div>
 
</div>   */}
</Container>
 </>
  )
}

export default App
