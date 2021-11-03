import React from 'react'
import './home.scss'

import Trending from '../../components/crypto-lists/trending/trending';
import TopTen from '../../components/crypto-lists/topTen/topTen';

const Home = () => {

    return (
        <div className="home d-flex align-items-center flex-column w-100">
            
            <div className="home__trending d-flex ">
                <Trending/>
            </div>
            <div className="home__topTen">
                <TopTen/>
            </div>
        </div>
    )
}

export default Home
