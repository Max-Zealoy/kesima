import React, {useState, useEffect} from 'react'
import Item from './Item'
import { AnimateSharedLayout } from "framer-motion"
import { motion } from "framer-motion"



function Items({ items, deleteItem,pageId }) {
    const [setItems] = useState([]);

     useEffect(() => {
        fetchItems();
    }, []) 

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
        <div className="SuperForm"> 
            {
                <AnimateSharedLayout>
                 <motion.ul layout>
                 {items.map( item => (
                    <div>
                    <table>
                    <th>

                    <Item 
                    key={item['_id']} 
                    item={item}
                    title={item.title}
                    description={item.description}
                    stock={item.stock}
                    price={item.price}
                    image={item.image}
                    deleteItem={deleteItem}
                    pageId={pageId}
                    
                    />
                    </th>
                    </table>
                  
                     </div>

                   ))
                 }</motion.ul>    
                </AnimateSharedLayout>

            }
            

        </div>


    )
}

export default Items

