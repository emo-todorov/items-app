import React from 'react'
import ConnectedItem from '../connectedComponents/connectedItem';

const ItemsList = ({ items = [] }) => {
    return (
        <div>
            {
                items.map(curItem => {
                    console.log(curItem)
                    return <ConnectedItem key={curItem.id} {...curItem} />
                })
            }
        </div>
    )
}

export default ItemsList