import AnimatedTitle from "./AnimatedTitle"
import entranceImg from "../../public/img/entrance.webp"
import { useRef } from "react"
import gsap from "gsap"
import Button from "./Button"


const Story = () => {

    const frameRef = useRef('null')

    const handleMouseMove = (e)=>{
        const {clientX , clientY} = e;
        const element = frameRef.current;

        if(!element)return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width/2;
        const centerY = rect.height/2;

        const rotateY = ((y-centerY)/centerY) * -10;
        const rotateX = ((x-centerX)/centerX) * 10;

        gsap.to(element,{
            duration:0.3,
            rotateX,
            rotateY,
            transformPerspective:500,
            ease:"power1.inOut"
        })
    }
    const handleMouseLeave = ()=>{}
    
  return (
    <section className=" w-screen bg-black text-blue-50" id="story relative ">
        <div className="flex size-full flex-col items-center  ">
            <p className="poppins-light text-sm uppercase md:text-[10px]">the multiversal ip world</p>
            <AnimatedTitle title="The Story of a  hidden realm" sectionId="#story" containeerClass="mt-5 pointer-events-none mix-blen-defferent relative z-10"/>

            <div className="w-full flex items-center justify-center ">
                <div className="w-[900px] h-[500px]">
                    <div className="m-10">
                        <img onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={frameRef} className="story_img" src={entranceImg} alt="entrance" />
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-30 mr-10 flex w-full justify-center Md:mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
                <p className="poppins-bold mt-3 max-w-sm text-center text-violet-50 md:text-start">Uncovers a forgotten world buried beyond the edge of reality. Ancient powers, lost civilizations, and mysterious forces wait in the shadows, challenging those brave enough to explore its secrets. Every path reveals new legends, hidden dangers, and the truth behind a realm that history tried to erase.</p>
                <Button title={'Discover Prolouge'} id='relm-button' containeerclass={"mt-5"} textColor={'text-blue-50'}/>
            </div>
        </div>
    </section>
  )
}

export default Story