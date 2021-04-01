import React from 'react';
import {Link} from "react-router-dom";

function Item({ item, deleteItem }) {
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
        
        <table>
            <h1>{item.title}</h1>
            <p>
                {item.content}
                <p>price: {item.price}</p>
                <br />
                <p>Description: {item.description}</p>
                <br />
                <p>stock :{item.stock}</p>
               

                <br />
                {`${itemDate.getFullYear()}-${itemDate.getMonth()}-${itemDate.getDate()}`}
            </p>
            {/* 
                Make sure to send the punId in the URL, in combination with setting the <Route path="/update-pun/:id"> in App.js 
                This will ensure that UpdatePun.js gets hold of the punId, through the variable "match"
            */}
            <Link to={`/update-items/${item['_id']}`}><button>Update</button></Link>
            <button onClick={handleDeleteBtn}>Delete</button>
            <Link to={`/ViewItem/${item['_id']}`}><button>View Item</button></Link>
        </table>
    )
}

export default Item
