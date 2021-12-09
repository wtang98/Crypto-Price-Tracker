import React,{useEffect, useState }  from 'react'
import Pricestable from './pricestable/pricestable'

const Prices = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [metaData, setMetaData] = useState([]);
    const [AllCryptos, setAllCryptos] = useState(cryptoData.length)
    const [cryptoTable, setCryptoTable] = useState([])
    const [numberOfRows, setNumberOfRows] = useState(10); 
    const [pageNumber, setPageNumber] = useState(1);  
    
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
    useEffect(()=>{fetchCryptoData()},()=>{fetchCryptoMetaData()}, []);
    
    const changeNumberOfRows = (e) => {
        setPageNumber(1);
        setNumberOfRows(e.target.value);
    }
    
    const backAPage = () => {
        if(pageNumber>1){
            setPageNumber(pageNumber-1);
        }
    }

    const fowardAPage = () => {
        let newPageNumber = pageNumber+1;
        if(newPageNumber-1 !== Math.ceil(cryptoData.length/numberOfRows)){
            setPageNumber(newPageNumber);
        }   
    }


    const displayCryptos = () => {
        const firstSliceIndex = numberOfRows*pageNumber-numberOfRows;
        const secondSliceIndex = numberOfRows*pageNumber;
        setCryptoTable(cryptoData.slice((firstSliceIndex),(secondSliceIndex)))
    }
    useEffect(displayCryptos, [cryptoData, pageNumber, numberOfRows]);
    
    const firstIndex = numberOfRows*pageNumber-numberOfRows;
    let secondIndex;
    cryptoTable.length < numberOfRows ? secondIndex = cryptoTable.length + firstIndex : secondIndex = numberOfRows*pageNumber;

    return (
        <div className="prices">
            {cryptoData && cryptoData.length > 0 && <Pricestable 
            cryptoTable={cryptoTable} 
            metaData={metaData}
            firstIndex={firstIndex}
            secondIndex={secondIndex}
            changeNumberOfRows={changeNumberOfRows}
            backAPage={backAPage}
            fowardAPage={fowardAPage}
            /> }
        </div>
    )
}

export default Prices