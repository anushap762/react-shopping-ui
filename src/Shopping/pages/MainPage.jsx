import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import CollectionComp from '../components/CollectionComp.jsx'
import Footer from '../components/Footer'
import { Gents,Ladies } from '../data.js'
import WomenCollection from '../components/WomenCollection.jsx'

const MainPage = () => {
    const [gentsFashion,setGentsFashion]=useState(Gents);
    const [ladiesFashion,setLadiesFashion] = useState(Ladies);
  return (
    <div>        
      <Header />
      <Banner />
      <CollectionComp gentsFashion={gentsFashion}/>
      <WomenCollection ladiesFashion={ladiesFashion}/>
      <Footer/>
    </div>
  )
}

export default MainPage
