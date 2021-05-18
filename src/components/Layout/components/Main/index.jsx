import React from "react";
import { Hero } from "../Hero";
import './main.scss'

const Main = ({ children, namePage, showHero }) => {
    return (
        <main className='main' id={namePage} >
            {showHero &&
                <Hero />
            }
            {children}
        </main>
    );
};

export { Main };