import React from "react"
import "./App.css"
import gsap from "gsap"
import GSAP from "./Images/gsap.jpeg"
import { useRef, useEffect } from "react"

const App = () => {
    let revelbars = useRef([])
    let imgage_container = useRef(null)
    let img = useRef(null)
    let heading = useRef(null)
    let text = useRef(null)
    const tl = gsap.timeline()

    useEffect(() => {
        tl.to(revelbars.current, 1,{
            height: 0,
            stagger: 0.15,
            delay: 1.2,
            ease: "power3.inOut",
        })
        tl.from(imgage_container, 1, {
            y: 600,
            ease: "power3.inOut",
        })
        tl.to(img, 1, {
            scale: 1,
            delay: -1,
        })
        tl.from(heading, 1, {
            y: 200,
            ease: "power3.inOut",
            delay: -0.4,
        })
        tl.from(text, 1, {
            y: 200,
            ease: "power3.inOut",
            delay: -0.4,
        })
    }, [])

  return (
    <div className="overflow-hidden relative">
        <div className="h-screen w-screen absolute flex z-20">
            <div className="w-[20%] h-full bg-[#3D3B40] top-0" ref={el => revelbars.current[0] = el}></div>
            <div className="w-[20%] h-full bg-[#3D3B40] top-0" ref={el => revelbars.current[1] = el}></div>
            <div className="w-[20%] h-full bg-[#3D3B40] top-0" ref={el => revelbars.current[2] = el}></div>
            <div className="w-[20%] h-full bg-[#3D3B40] top-0" ref={el => revelbars.current[3] = el}></div>
            <div className="w-[20%] h-full bg-[#3D3B40] top-0" ref={el => revelbars.current[4] = el}></div>
        </div>

        <div className="h-screen w-screen">
            <div className="h-full w-[50%] absolute left-0">
                <div className="w-full h-full flex flex-col justify-center overflow-hidden">
                    <div className="overflow-hidden">
                        <div className="text-9xl mx-20" ref={el => heading = el}>
                            GSAP
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="text-2xl mx-20 mt-8 overflow-hidden" ref={el => text = el}>
                            GSAP is a framework-agnostic JavaScript animation library that turns developers into animation superheroes. Build high-performance animations that work in every major browser.
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-[50%] absolute right-0">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="rounded-2xl overflow-hidden" ref={el => imgage_container = el}> 
                        <img className="w-96 scale-125" ref={el => img = el} src={GSAP} alt="gsap" />
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default App
