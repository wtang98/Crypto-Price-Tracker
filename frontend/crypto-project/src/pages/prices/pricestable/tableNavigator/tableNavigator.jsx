import LeftArrow from '../../../../assets/images/left.png'
import RightArrow from '../../../../assets/images/right.png'
import './tableNavigator.scss'

import React from 'react'

const TableNavigator = (props) => {
    const {firstIndex, secondIndex, changeNumberOfRows, fowardAPage, backAPage} = props;

    return (
        <div className="tabNav">
            <div className="tabNav__rowSelector">
                <p className="tabNav__rowSelector-title">Cryptos Per Page:</p>
                <select className="tabNav__rowSelector-select" name="load number of cryptos" defaultValue="10" onChange={changeNumberOfRows} id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                </select>
            </div>
            <p className="tabNav__pageIndex">{firstIndex+1} - {secondIndex}</p>
            <div className="tabNav__pageSelector">
                <img className="left" src={LeftArrow} onClick={backAPage} alt="left arrow" />
                <img className="right"  src={RightArrow} onClick={fowardAPage} alt="right arrow" />
            </div>
        </div>
    )
}

export default TableNavigator
