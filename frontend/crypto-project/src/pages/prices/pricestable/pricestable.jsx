import React from 'react'
import './pricestable.scss'
import Priceslist from '../priceslist/priceslist'

const Pricestable = (props) => {
    const {cryptoData} = props
    const cryptoDataId = cryptoData.prices.map((cryptoDat) =><React.Fragment ><Priceslist name={cryptoDat.name} price={cryptoDat.price}/></React.Fragment>);
    return (
        <div className="pricestable">
            {cryptoDataId}
        </div>
    )
}

export default Pricestable
