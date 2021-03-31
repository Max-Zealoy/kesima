// VG delm

import React, {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";

function UpdateItem({ match }) {
    console.log(match);
    console.log('ItemId:', match.params.id);
    const [item, setItem] = useState({});
    const history = useHistory();

    useEffect(() => {
        fetchItem();
    }, []);

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
            history.push('/manage-items')
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setItem({
            ...item,
            content: e.target.value
        })
    }


    return (
        <div>
            <h1>Update Item</h1>

            <form onSubmit={updateItem}>
                <textarea 
                    name="content" 
                    value={item.content} 
                    onChange={handleChange}
                    cols="30" 
                    rows="10"
                ></textarea>
                
                <p>Created at: {item.date}</p>
                <br />
                <br />
                
                <button>Update</button>
                <br />
                <br />
                <Link to="/manage-items">&larr; Back</Link>
            </form>
        </div>
    )
}

export default UpdateItem