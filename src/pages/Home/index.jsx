import React from "react";
import styles from "./Home.module.css"
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Body from "../../components/Body/Body";
import PreFooter from "../../components/Footer/Prefooter/PreFooter";
import Acessibilidade from "../../components/Acessibilidade/Acessibilidade"
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
const Home = ()=>{
    return(
        <div>
            <Acessibilidade></Acessibilidade>
            <Header></Header>
            <NavBar></NavBar>
            <Banner></Banner>
            <Body></Body>
            <PreFooter></PreFooter>
            <Footer></Footer>
        </div>
    )
}

export default Home