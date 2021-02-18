import React from "react";
import './main.scss'

const Main = ({ children }) => {
    // Javascript

    return (
        <>
            {/* JSX */}
            <main className='main'>
                {children}
            </main>
        </>
    );
};

export { Main };