import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import exploreImage from './img/explore-section1.jpg'
import createImage from './img/create-section1.jpg'
import shareImage from './img/share-section1.jpg'
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section id={"explore-head-section"} head={"Explore"} bodyClass={"bg-light text-muted py-5"} image={exploreImage}
        aClass={'btn btn-outline-secondary'} bodyHead={"Explore & Connect"} order1={"col-md-6"}  order2={"col-md-6"}/>
      <Section id={"create-head-section"} head={"Create"} headClass={"bg-primary"} bodyClass={"py-5"} image={createImage}
        aClass={'btn btn-outline-light'} bodyHead={"Create Your Passion"} order1={"col-md-6 order-2"}  order2={"col-md-6 order-1"}/>
      <Section id={"share-head-section"} head={"Share"} headClass={"bg-primary"} bodyClass={"bg-light text-muted py-5"} image={shareImage}
        aClass={'btn btn-outline-light'} bodyHead={"Share What You Create"} order1={"col-md-6"}  order2={"col-md-6"}/>
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
