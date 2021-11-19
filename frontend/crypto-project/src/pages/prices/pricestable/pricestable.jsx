import React from 'react'
import './pricestable.scss'
import Priceslist from './priceslist/priceslist'

const Pricestable = (props) => {
    const {cryptoData, metaData} = props
    const cryptoDataId = cryptoData.map((cryptoDat) => {
        return <Priceslist cryptoDat={cryptoDat} metaData={metaData}/>
    });
    return (
        <div className="pricestable">
            {/* <h1>Cryptocurrencies</h1> */}
            <div className="pricestable__rows">
                {cryptoDataId}
            </div>
        </div>
    )
}

export default Pricestable