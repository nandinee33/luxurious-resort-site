import React from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"

export default function Home() {
    return (
        <>
        <Hero>
            <Banner
                title="Luxurious Rooms"
                subtitle="deluxe rooms starting at Rs.1000"
                >
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        
        </>
    )
}
