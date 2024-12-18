import "bootstrap/dist/css/bootstrap.min.css"
function Single ({ itemname,itemdate ,handeldelete}){
    
return(
    <>
    <div className="container">
        <div >
            <div className="col-4">  {itemname}</div>
            <div className="col-6"> {itemdate}</div>
            <div className="2">
            <button type="button" className="btn btn-danger" onClick={ ()=> handeldelete(itemname)} >delete</button>
            </div>
        </div>
    </div>
    </>
)
}
export default Single;