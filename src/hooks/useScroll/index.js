import { useState, useEffect } from "react";

const useScroll = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(
        document.body.getBoundingClientRect()
    );
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState();

    const listener = () => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return {
        scrollY,
        scrollX,
        scrollDirection
    };
}

export { useScroll }


    // const { scrollDirection } = useScroll();

    // const [Header, setHeader] = useState(true);

    // const handleScroll = () => {
    //     if (scrollDirection === "down") {
    //         setHeader(false)
    //     }
    //     if (scrollDirection === "up") {
    //         setHeader(true)
    //     }
    // }

    // window.addEventListener('scroll', handleScroll)