import React from 'react';
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table'
import { motion } from "framer-motion"



function Item({ item, deleteItem, pageId}) {
    let itemDate = new Date(item.date);

    const handleDeleteBtn = () => {
        deleteItem(item['_id']);
    }
    

  
/*

    "title": "The post4",
	"content": "Super Content",
	"price": 250,
	"description": "Something good",
	"stock":10 

    */ 


// 


 

    return (
        

       


       <motion.div className ="SuperDiv" class="rounded" >
             
             
           <motion.div
            
            drag
             >
             
             <Table striped bordered hover variant="dark" className ="SuperTable">  
           <thead>
               <td  colSpan="5" className ="SuperTitle">  {item.title}
              </td>
            </thead>   
            <tbody>  
               <td><p>price: {item.price}</p></td>
                <td><p>Description: {item.description}</p></td>
                <td><p>stock :{item.stock}</p></td>
                <td><img src={item.image}></img></td>
                <td><p>{`${itemDate.getFullYear()}-${itemDate.getMonth()}-${itemDate.getDate()}`}
                </p></td>
                  
            {/* 
                Make sure to send the punId in the URL, in combination with setting the <Route path="/update-pun/:id"> in App.js 
                This will ensure that UpdatePun.js gets hold of the punId, through the variable "match"
            */}
            
            {pageId === "ManageItems" 
            ? <div>
              < Link to={`/update-items/${item['_id']}`}><button className ="button">Update</button></Link>
              <button className ="button" onClick={handleDeleteBtn}>Delete</button>
             
             
           
           </div>
           :''
            } 
        
            
            <Link to={`/ViewItem/${item['_id']}`}><button className ="button">View Item</button></Link>
            </tbody> 
            </Table>
            </motion.div>  
              
            </motion.div>          
           
    )
}

export default Item
