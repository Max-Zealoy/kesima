import React, {useState, useEffect} from 'react'
import Item from './Item'
import {Link} from "react-router-dom";


function Items({ items, deleteItem }) {
    const [setItems] = useState([]);


     // ComponetetDidMount
     useEffect(() => {
        fetchItems();
    }, []) // Second arg as empty array means run only once on load, equal to ComponentDidMpunt

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/products/ ');
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setItems(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    }


    const getItem = async (itemId) => {
        try {
            await fetch('http://localhost:5000/products/' + itemId, {
                method: 'GET', // GET, POST, PATCH, DELETE
            });
        } catch (message) {
            throw new Error(message);
        }
        fetchItems();
    }

    return (
        <div> 
            {
                items.map( item => (
                    <div>
                    <Item 
                    key={item['_id']} 
                    item={item}
                    title={item.title}
                    description={item.description}
                    stock={item.stock}
                    price={item.price}
                    deleteItem={deleteItem}
                    />
                  
                  
                     </div>

                ))
                
            }
        </div>

//<Link to={{ pathname: `product/${product.name}`, state: { product } }}>
//<Link to={`/item/${item['_id']}`}><button>item</button></Link>

    )
}

export default Items


// key={pun['_id']} pun={pun} deletePun={deletePun}