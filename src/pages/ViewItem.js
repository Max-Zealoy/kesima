import React, {useState, useEffect }from 'react';
import {Link, useHistory} from "react-router-dom";


function ViewItem({ match }) {
 console.log('ItemId:', match.params.id)
const [item, setItem] = useState({});

useEffect(() => {
    fetchItem();
}, []);



    const fetchItem = async () =>{
    try {
        const response = await fetch('http://localhost:5000/products/' + match.params.id);
        if (!response.ok) {
            throw new Error('HTTP Error! status: ' + response.status);
        }
        const data = await response.json();
        setItem(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    }

    return (
        <div>
            <h1>Item Page</h1>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <h3>{item.stock}</h3>
            <h3>{item.description}</h3>
            <Link to="/admin/manage-items">&larr; Back</Link>
        </div>
    )
}

export default ViewItem