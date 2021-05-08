import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import TeamMembers from "../components/TeamMembers"

const Team = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="About Us">
                <p className="about-para">Luxurious resort is designed so that you can simply book a room
according to your choice and your need on the shore of beaches at very
affordable price. Our aim is to give our travelers thousands of
beautiful memories. All rooms that are referenced on our website have
comfortable spaces with crisp sheets and sanitized bathrooms. For your ease
you can apply different filters and check more about the rooms.</p>
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <TeamMembers/>
        </>
    )
}

export default Team

