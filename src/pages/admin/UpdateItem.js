
import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import DisplayImage from '../Image';

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
           [name]: value,
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
                body: JSON.stringify(item) 
            });

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
             required maxlength="20"
             type="text" 
             value={item.title} 

             />
             </label>

             <br></br>

             <label>
             <p>price</p>
             <input 
             name="price"
             type="Number"
             required min="1" max="1000000"
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
             required min="1" max="1000000"
             value={item.stock} 
             />
             </label>
            <br></br>

            <DisplayImage
                 type="file"
                 value={item.image}
                 name="image"
                 alt="product picture"
                />

                <br> 
                </br> 
                 <textarea 
                     name="description" 
                     value={item.description}
                     required maxlength="300"
                     cols="30" 
                     rows="10"
                 ></textarea> 
                 
                
                 <br />
                 <br />
                 
                 
                 <button className="btn btn-success">Update</button>
                 <br />
                 <br />
                
                
                <p>Created at: {item.date}</p>
                <br />
                <br />
                <Link to="/admin/manage-items">&larr; Back</Link>
            </form>
        </div>
    )
}

export default UpdateItems