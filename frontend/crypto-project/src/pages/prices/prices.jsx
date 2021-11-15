import React,{useEffect, useState }  from 'react'
import Pricestable from './pricestable/pricestable'

const Prices = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [metaData, setMetaData] = useState([]);

    const fetchCryptoData = () => {
        fetch("http://localhost:8080/CryptoCurrency/prices")
        .then(response => response.json())
        .then(jsonData => {
            setCryptoData(jsonData.prices)
        })
        .catch(err=> console.log("Failed to fetch Crypto data."));
    }
    const fetchCryptoMetaData = () => {
        fetch("http://localhost:8080/CryptoCurrency/metaData")
        .then(response => response.json())
        .then(jsonData => {
            setMetaData(jsonData.data)
        })
        .catch(err=> console.log("Failed to fetch Crypto data."));
    }

    useEffect(()=>{fetchCryptoData()}, []);
    useEffect(()=>{fetchCryptoMetaData()}, []);
    
    return (
        <div>
            {cryptoData && cryptoData.length > 0 && <Pricestable cryptoData={cryptoData} metaData={metaData}/> }
        </div>
    )
}

export default Prices