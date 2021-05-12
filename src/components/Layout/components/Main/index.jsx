import React from "react";
import './main.scss'

const Main = ({ children, namePage }) => {
    return (
        <>
            <main className='main' id={namePage} >
                {children}
            </main>
        </>
    );
};

export { Main };