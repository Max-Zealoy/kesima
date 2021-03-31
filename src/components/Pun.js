import React from 'react';
import {Link} from "react-router-dom";

function item({ item, deleteitem }) {
    let itemDate = new Date(item.date);

    const handleDeleteBtn = () => {
        deleteitem(item['_id']);
    }

    return (
        <article>
            <p>
                {item.content}
                <br />
                {`${itemDate.getFullYear()}-${itemDate.getMonth()}-${itemDate.getDate()}`}
            </p>
            {/* 
                Make sure to send the punId in the URL, in combination with setting the <Route path="/update-pun/:id"> in App.js 
                This will ensure that UpdatePun.js gets hold of the punId, through the variable "match"
            */}
            <Link to={`/update-pun/${item['_id']}`}><button>Update</button></Link>
            <button onClick={handleDeleteBtn}>Delete</button>
        </article>
    )
}

export default Pun
