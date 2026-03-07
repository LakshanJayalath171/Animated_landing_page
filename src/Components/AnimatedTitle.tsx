import gsap from "gsap";
import { useEffect, useRef } from "react"

const AnimatedTitle = ({title,containeerClass}) => {

    const containeerRef = useRef(null);

    useEffect(()=>{
        const ctx  = gsap.context(()=>{
            const titleAnimation  = gsap.timeline({
                scrollTrigger :{
                    trigger:containeerRef.current,
                    start:"100 bottom",
                    end:"center bottom",
                    toggleActions:"play none none reverse"
                }
            })
        },containeerRef)
    },[])

  return (
    <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md;text-[6rem]" ref={containeerRef}>
        {title.split('</br>').map((line,index)=>(
            <div key={index} className="flex max-w-full flex-wrap gap-2 px-10 md:gap-3">
                {line.split(' ').map((word,i)=>(
                    <span key={i} className="animated-word" dangerouslySetInnerHTML={{__html:word}}/>
                ))}
            </div>
        ))}
    </div>
  )
}

export default AnimatedTitle