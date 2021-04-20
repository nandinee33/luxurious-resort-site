import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Testimonial = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="Feedbacks">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Testimonial