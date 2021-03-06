
 import React, {useState} from 'react';
 import {Link, useHistory} from "react-router-dom";
 import DisplayImage from '../Image'


 function CreateItem() {
     const [item, setItem] = useState({});
     const history = useHistory();


      const handleChange = (e) => {
         
        const name = e.target.name
          const value = e.target.value

         setItem({
             ...item,
             [name]: value,
         })
     }

     const handleSubmit = async (e) => {   
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/products/', {
                method: 'POST', // GET, POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item) 
            });
    
            history.push('admin/manage-items')
        } catch (error) {
            console.log(error);
        }
    }

     return (
         <div className = "creatFormDiv">
             <h1>Create Item</h1>
 
             <form onSubmit={handleSubmit} onChange={handleChange}>
            
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
            
                <br> 
                </br> 
                
              
                <DisplayImage
                 type="file"
                 value={item.image}
                 name="image"
                 alt="image"
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
                 <button className ="button">Create Item</button>
                 <br />
                 <br />
                 <Link to="/admin/manage-items">&larr; Back</Link>
             </form>
         </div>
     )
 
}
 
 export default CreateItem
 