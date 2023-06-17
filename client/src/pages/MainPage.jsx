import React from 'react'
import AboutUs from "../components/aboutus/AboutUs.jsx";
import Entertaiment from "../components/entertainment/Entertaiment.jsx";
import Footer from "../components/footer/Footer.jsx";
import Houses from "../components/houses/Houses.jsx";
import Promo from "../components/promo/Promo.jsx";
import { MainLayout } from '../components/MainLayout.jsx';

export const MainPage = () => {
  return (
    <div >
      <Promo />
      <MainLayout>
        <AboutUs />
        <Houses />
        <Entertaiment />
        <Footer />
      </MainLayout>
    </div>
  )
}