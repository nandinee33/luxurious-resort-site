import React from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Feedback from "../components/Feedback"


export default function Testimonial() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Feedback">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <Feedback/>
        </>
    )
}
