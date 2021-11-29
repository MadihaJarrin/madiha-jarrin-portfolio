import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;