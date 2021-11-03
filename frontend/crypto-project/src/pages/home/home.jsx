import React from 'react'
import Nav from '../../components/nav/nav';
import Trending from '../../components/crypto-lists/trending/trending';

const Home = () => {


    return (
        <div className="home">
            <Nav/>
            <Trending/>
        </div>
    )
}

export default Home
