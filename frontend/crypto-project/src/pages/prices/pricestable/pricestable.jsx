import React from 'react'
import './pricestable.scss'
import Priceslist from './priceslist/priceslist'
import TableNavigator from './tableNavigator/tableNavigator'

const Pricestable = (props) => {
    const {cryptoTable, metaData, firstIndex, secondIndex, changeNumberOfRows, backAPage, fowardAPage} = props
    const cryptoDataId = cryptoTable.map((cryptoDat) => {
        return <Priceslist cryptoDat={cryptoDat} metaData={metaData}/>
    });
    return (
        <div className="pricestable d-flex">
            <h1>Cryptocurrencies</h1>
            <div className="pricestable__rows">
                {cryptoDataId}
            </div>
            <div  className="pricestable__nav">
                <TableNavigator firstIndex={firstIndex} 
                secondIndex={secondIndex} 
                changeNumberOfRows={changeNumberOfRows}
                backAPage={backAPage}
                fowardAPage={fowardAPage}/>
            </div>
        </div>
    )
}

export default Pricestable