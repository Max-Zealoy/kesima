import React, {useState, useEffect} from 'react'
import Item from './Item'


function Items({ items, deleteItem,pageId }) {
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
                    pageId={pageId}
                    
                    />
                  
                  
                     </div>

                ))
                
            }
        </div>


    )
}

export default Items

