
 import React, {useState} from 'react';
 import {Link, useHistory} from "react-router-dom";
 
 function CreateItem() {
     const [item, setItem] = useState({});
     const history = useHistory();
 
      const handleChange = (e) => {
          const name = e.target.name
          const value = e.target.value

         setItem({
             ...item,
             [name]: value
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
                body: JSON.stringify(item) // body data type must match "Content-Type" header
            });
    
            // window.location.replace('/manage-puns') // redirects to the index.html page
            // A smoother redirecting, without a page reload
            history.push('admin/manage-items')
        } catch (error) {
            console.log(error);
        }
    }



/*                  key={item['_id']} 
                    item={item}
                    title={item.title}
                    description={item.description}
                    stock={item.stock}
                    // image={item.image}
                    price={item.price}  */


     return (
         <div>
             <h1>Create Item</h1>
 
             <form onSubmit={handleSubmit} 
             onChange={handleChange}>
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
                 
                 <button>Create Item</button>
                 <br />
                 <br />
                 <Link to="/admin/manage-items">&larr; Back</Link>
             </form>
         </div>
     )
 }
 
 export default CreateItem
 