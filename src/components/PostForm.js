import React from 'react'
import {Link} from "react-router-dom";

function PostForm({handleSubmit, handleChange, item, itemId}) {
    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                name="content" 
                value={item.content} 
                onChange={handleChange}
                cols="30" 
                rows="10"
            ></textarea>
            {
                pageId === "update-page" 
                    ? <p>Created at: {item.date}</p>
                    : ''
            }
            <br />
            <br />
            
            <button> {pageId === "update-page" ? "Update" : "Create" }</button>
            <br />
            <br />
            <Link to="/manage-puns">&larr; Back</Link>
        </form>
    )
}

export default PostForm
