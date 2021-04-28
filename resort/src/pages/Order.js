import React from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Booking from "../components/Booking"


export default function Order() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Confirm Your Booking">
                <Link to="/rooms" className="btn-primary">
                    return to rooms
                </Link>
            </Banner>
        </Hero>
        <Booking/>
        </>
    )
}