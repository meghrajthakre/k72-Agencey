import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
const Stairs = (props) => {
    const stairsParentRef = useRef(null);
    const pageRef = useRef(null)
    const currentLoc = useLocation().pathname
    
    useGSAP(function () {

        let tl = gsap.timeline(0);

        tl.to(stairsParentRef.current, {
            display: 'block'
        })

        tl.from('.stairs', {
            height: 0,
            stagger: {
                amount: -0.15
            }
        })
        tl.to('.stairs', {
            y: '100%',
            stagger: {
                amount: -0.15
            }
        })

        tl.to(stairsParentRef.current, {
            display: 'none'
        })

        tl.to('.stairs', {
            y: '0%'
        })

        gsap.from(pageRef.current,{
            opacity:0,
            delay:1.3,
            scale:1.2
        })
    },[currentLoc])

    return (
        <>

            <div ref={stairsParentRef} className='h-screen w-screen fixed z-20 top-0'>
                <div className='h-full flex w-full'>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                    <div className='stairs h-full w-1/5 bg-black'></div>
                </div>
            </div>

            <div ref={pageRef}>
                {props.children}
            </div>
        </>
    )
}

export default Stairs