import React from 'react'
import './priceslist.scss'

const Priceslist = (props) => {
    const {price,name}=props
    return (
        <div className="priceslist">
            <p>{price}</p>
            <p>{name}</p>
        </div>
    )
}

export default Priceslist
