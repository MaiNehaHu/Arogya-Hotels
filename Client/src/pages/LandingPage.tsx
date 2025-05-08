// import React from 'react'

import AboutSection from "../components/landing/About"
import ContactUs from "../components/landing/ContactUs"
import { FinalCTA } from "../components/landing/FinalCTA"
import { Footer } from "../components/landing/Footer"
import HeroSection from "../components/landing/Hero"
import { HowItWorks } from "../components/landing/HowItWorks"
import MenuCategories from "../components/landing/Menu"
import NavBar from "../components/landing/NavBar"
import TodaySpecial from "../components/landing/TodaySpecial"

const LandingPage = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <MenuCategories />
            <TodaySpecial />
            <AboutSection />
            <HowItWorks />
            <FinalCTA />
            <ContactUs />
            <Footer />
        </>
    )
}

export default LandingPage