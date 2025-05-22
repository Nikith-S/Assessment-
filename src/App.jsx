import React from 'react' 
import Header from './components/Header/Header'
import './App.css'
import HeroBanner from './components/HeroBanner/HeroBanner'
import TopBrands from './components/TopBrands/TopBrands'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Membership from './components/Membership/Membership'
import HealthConcerns from './components/HealthConcerns.jsx/HealthConcerns'
import Footer from './components/footer/footer'
import DealOfTheDay from './components/DealOfTheDay/DealOfTheDay'
const App = () => {
  return (
 <div className="app">
  <Header />
   <HeroBanner />
   <TopBrands />
   <ProductGrid />
   <Membership />
   <HealthConcerns />
   <DealOfTheDay />
   <Footer />
 </div>
  )
}

export default App
