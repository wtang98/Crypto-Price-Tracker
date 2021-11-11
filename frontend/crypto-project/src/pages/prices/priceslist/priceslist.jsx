import React from 'react'
import './priceslist.scss'

const Priceslist = (props) => {
    const {cryptoDat}=props
    return (
        <div className="priceslist">
            <p>{cryptoDat.price}</p>
            <p>{cryptoDat.name}</p>
        </div>
    )
}

export default Priceslist
