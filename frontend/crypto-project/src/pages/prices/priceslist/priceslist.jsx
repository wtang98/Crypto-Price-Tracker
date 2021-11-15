import React from 'react'
import './priceslist.scss'

const Priceslist = (props) => {
    const {cryptoDat, metaData}=props
    const price = "$"+parseFloat(cryptoDat.price).toFixed(2);
    const gigaChad = cryptoDat.id;
    console.log(gigaChad);
    console.log(metaData);
    console.log(metaData[gigaChad].logo);
    
    return (
        <div className="priceslist">
            <p>{cryptoDat.name} {price}</p>
            {metaData[gigaChad].logo ? <img src={metaData[gigaChad].logo} alt="" />:  " "}
        </div>
    )
}

export default Priceslist
