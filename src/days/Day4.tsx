import { useEffect, useRef, useState } from 'react';
import './day4.css';

const Day4 = () => {

    const [scrollProgress, setScrollProgress] = useState(0);

    const myBar = useRef<HTMLDivElement>(null);



    const handleScrollEvent = () => {
        const currentProgress = window.scrollY;

        const scrollHeight = document.body.scrollHeight - window.innerHeight

        if (scrollHeight) {

            setScrollProgress(
                currentProgress / scrollHeight * 100
            )

            myBar.current!.style.width = scrollProgress + '%'
        }

    }


    useEffect(() => {

        window.addEventListener('scroll', handleScrollEvent)
        handleScrollEvent();


        return () => {
            window.removeEventListener('scroll', handleScrollEvent)
        };
    }, [scrollProgress]);



    return (
        < >
            <div className="progress-container">
                <div className="progress-bar" id="myBar" ref={myBar}></div>
            </div>
            <div className='content'></div>
        </>
    );
}

export default Day4;
