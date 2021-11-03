import React from 'react'
import './trending.scss'
import {BiTrendingUp} from 'react-icons/bi'

const Trending = () => {
    return (
        <div className="trending">
            <div className ="trending__title d-flex justify-center w-100">
                <BiTrendingUp/>
                <h3>Trending</h3>
            </div>
        </div>
    )
}

export default Trending
