import React from 'react'
import './pricestable.scss'
import Priceslist from '../priceslist/priceslist'

const Pricestable = (props) => {
    const {cryptoData} = props
    const cryptoDataId = cryptoData.map((cryptoDat) => {
        return <Priceslist cryptoDat={cryptoDat}/>
    });
    return (
        <div className="pricestable">
            {cryptoDataId}
        </div>
    )
}

export default Pricestable

// <React.Fragment>
// </React.Fragment>