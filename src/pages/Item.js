import React from 'react';
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table'



function Item({ item, deleteItem, pageId}) {
    let itemDate = new Date(item.date);

    const handleDeleteBtn = () => {
        deleteItem(item['_id']);
    }

    return (

       <div className ="SuperDiv" class="rounded" >
             
             <Table striped bordered hover variant="dark" className ="SuperTable">  
           <thead>
               <td  colSpan="6" className ="SuperTitle">  {item.title}
              </td>
            </thead>   
            <tbody>  
               <td><p>Price: <br></br>{item.price}</p></td>
                <td><p>Description: <br></br>{item.description}</p></td>
                <td><p>Stock: <br></br>{item.stock}</p></td>
                <td><img src={item.image} alt="product picture"></img></td>
                <td><p>Date: <br></br>{`${itemDate.getFullYear()}-${itemDate.getMonth()}-${itemDate.getDate()}`}
                </p></td>
                  

            <Link to={`/ViewItem/${item['_id']}`}><button class="btn btn-info">View Item</button></Link>
            
            {pageId === "ManageItems" 
            ? <div>
              < Link to={`/update-items/${item['_id']}`}><button className="btn btn-warning">Update</button></Link>
              <button className="btn btn-danger" onClick={handleDeleteBtn}>Delete</button>
             
           </div>

           :''
            } 
            </tbody> 
            </Table>
            </div>          
    )
}
export default Item
