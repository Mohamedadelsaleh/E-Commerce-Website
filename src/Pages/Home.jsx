import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import NavBar from '../Components/NavBar'
import Products from '../Components/Products'
import Slider from '../Components/Slider'


const Home = () => {
    return (
        <div>
            <Announcement />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
        </div>
    )
}

export default Home