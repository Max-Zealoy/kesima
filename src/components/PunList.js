import React from 'react'
import Pun from './Pun'

function itemList({ item, deleteitem }) {
    return (
        <div>
            {
                items.map( item => (
                    <item key={item['_id']} item={item} deleteitem={deleteitem} />
                ))
            }
        </div>
    )
}

export default PunList
