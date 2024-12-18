 
 import Single from "./todosingle"
const Itemlist=({todoitem, handeldelete} )=>{
 
   
  return(
    <> 
     {todoitem.map( (item)=>(
      
        <Single itemname= {item.name} 
        itemdate={item.duedate}handeldelete={handeldelete} ></Single>
               
              
         
         
          
     )

     ) }
     </>
  )
}
export default Itemlist
 