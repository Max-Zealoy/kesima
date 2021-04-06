import React, {useState, useEffect }from 'react';
import Items from './Items';





function Home() {
    const [items, setItems] = useState([]);

    // ComponetetDidMount
    useEffect(() => {
        fetchItems();
    }, []) // Second arg as empty array means run only once on load, equal to ComponentDidMpunt

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/products/');
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

    const deleteItem = async (itemId) => {
        try {
            await fetch('http://localhost:5000/products/' + itemId, {
                method: 'DELETE', // GET, POST, PATCH, DELETE
            });
        } catch (message) {
            throw new Error(message);
        }

        fetchItems();
    }



    return (
        
        <div>
            
            <h1> Home </h1> 
            <Items 
                items={items} 
                deleteItem={deleteItem}
                pageId="Home"
            />
        </div>
    )
}

export default Home


