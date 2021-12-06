import React from 'react'
import './priceslist.scss'
import CurrencyFormat from 'react-currency-format'

const Priceslist = (props) => {
    const {cryptoDat, metaData, }=props
    const gigaChad = cryptoDat.id;
    // console.log(gigaChad);
    // console.log(metaData);
    // console.log(metaData[gigaChad].logo);
    
    return (
        <div className="priceslist">
            <p>{cryptoDat.name}</p>
            <CurrencyFormat
                renderText={(value)=> (
                    <>
                    <p>Price: {value}</p>
                    </>
                )}
                decimalScale={2}
                value={cryptoDat.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {/* {metaData[gigaChad].logo ? <img src={metaData[gigaChad].logo} alt="" />:  " "} */}
        </div>
    )
}

export default Priceslist







