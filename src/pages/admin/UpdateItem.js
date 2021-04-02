// VG delm

import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";

function UpdateItems({ match }) {
    console.log(match);
    console.log('ItemId:', match.params.id);
    const [item, setItem] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetchItem();
    }, []);


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

       setItem({
           ...item,
           [name]: value
       })
   }
   
    const fetchItem = async () => {
        try {
            const response = await fetch('http://localhost:5000/products/' + match.params.id);
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            console.log(data);
            setItem(data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateItem = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/products/' + item['_id'], {
                method: 'PATCH', // GET, POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item) // body data type must match "Content-Type" header
            });
    
            // window.location.replace('/manage-puns') // redirects to the index.html page
            // A smoother redirecting, without a page reload
            history.push('../admin/manage-items')
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <div>
            <h1>Update Item</h1>

            <form onSubmit={updateItem} onChange={handleChange}>
             <label>
             <p>Titel</p>
             <input 
             name="title"
             type="text" 
             value={item.title} 

             />
             </label>
             <label>
             <p>price</p>
             <input 
             name="price"
             type="Number"
             value={item.price} 
             />
             </label>
             
                <br> 
                </br>
            <label>
             <p>stock</p>
             <input 
             name="stock"
             type="Number"
             value={item.stock} 
             />
             </label>
             
                <br> 
                </br> 
                 <textarea 
                     name="description" 
                     value={item.description}
                     cols="30" 
                     rows="10"
                 ></textarea> 
                 
                
                 <br />
                 <br />
                 
                 
                 <button>Update</button>
                 <br />
                 <br />
                
                
                <p>Created at: {item.date}</p>
                <br />
                <br />
                <Link to="/">&larr; Back</Link>
            </form>
        </div>
    )
}

export default UpdateItems