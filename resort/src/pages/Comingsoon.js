import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Comingsoon() {
    return (
        <Hero>
            <Banner title="Coming Soon" subtitle="Our team is working on this">
                <Link to="/" className="btn-primary">
                return home
                </Link>
            </Banner>
        </Hero>
    )
}