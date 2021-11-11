import React,{useEffect, useState }  from 'react'
import Pricestable from './pricestable/pricestable'

const Prices = () => {
    const [cryptoData, setCryptoData] = useState([])

    const fetchCryptoData = async () => {
        await fetch("http://localhost:8080/CryptoCurrency/prices")
        .then(response => response.json())
        .then(jsonData => setCryptoData(jsonData))
        .catch(err=> console.log("Failed to fetch Crypto data."));
    }
    // const one = cryptoData.prices.slice(0, 1);
    console.log(cryptoData.prices);
    useEffect(()=>{fetchCryptoData()}, []);
    
    return (
        <div>
            <Pricestable cryptoData={cryptoData.prices}/>
        </div>
    )
}

export default Prices
