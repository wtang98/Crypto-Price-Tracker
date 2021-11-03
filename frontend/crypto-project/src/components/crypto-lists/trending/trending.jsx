import React from 'react'
import './trending.scss'
import {BiTrendingUp} from 'react-icons/bi'

const Trending = () => {
    
    return (
        <div className="trending">
            <div className ="trending__title d-flex align-items-center justify-center w-100">
                <div className ="trending__title-icon">
                    <BiTrendingUp/>
                </div>
                <h3>Trending</h3>
            </div>
            <div className="trending__table">
                
            </div>
        </div>
    )
}

export default Trending
