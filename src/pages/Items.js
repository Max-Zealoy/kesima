import React from 'react'
import Item from './Item'

function Items({ items, deleteItem }) {
    return (
        <div> 
            {
                items.map( item => (
                    <Item 
                    key={item['_id']} 
                    item={item}
                    title={item.title} 
                    description={item.description}
                    stock={item.stock}
                    image={item.image}
                    price={item.price}
                    deleteItem={deleteItem} 
                    />
                ))
            }
        </div>


    )
}

export default Items


// key={pun['_id']} pun={pun} deletePun={deletePun}