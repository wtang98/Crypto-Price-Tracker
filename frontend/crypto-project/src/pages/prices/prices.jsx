import React,{useEffect, useState }  from 'react'
import Pricestable from './pricestable/pricestable'

const Prices = () => {
    const [cryptoData, setCryptoData] = useState([])

    const fetchCryptoData = () => {
        fetch("http://localhost:8080/CryptoCurrency/prices")
        .then(response => response.json())
        .then(jsonData => {
            setCryptoData(jsonData.prices)
        })
        .catch(err=> console.log("Failed to fetch Crypto data."));
    }
    // const one = cryptoData.prices.slice(0, 1);
    console.log(cryptoData.prices);
    useEffect(()=>{fetchCryptoData()}, []);
    
    return (
        <div>
            {cryptoData && cryptoData.length > 0 && <Pricestable cryptoData={cryptoData}/> }
        </div>
    )
}

export default Prices