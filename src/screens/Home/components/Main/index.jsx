import React from "react";
import './main.scss'

const Main = ({ children }) => {
    return (
        <>
            <main className='main'>
                {children}
            </main>
        </>
    );
};

export { Main };