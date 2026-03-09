// defining cards 

import { useRef, useState } from "react"
import { CgArrowDown } from "react-icons/cg"



const Card = ({src ,title,desc })=>{

  const [transfromStyle , setTransformStyle] = useState('')
  const itemRef = useRef();

  // handle mouse move event 
  const handleMouseMove = (e)=>{
    if(!itemRef.current) return

    const {top,left,width,height} = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left)/width;
    const relativeY = (e.clientY - top)/height;

    const tiltX = (relativeX - 0.5) * 5;
    const tiltY = (relativeY - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3D(0.98,0.98,0.98)`

    
    setTransformStyle(newTransform)
  }

  // handle mouse leave event 
  const handleMouseLeave = ()=>{}

  return(
    <div ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transfromStyle}} className="relative size-full border border-blue-50 rounded-2xl mt-6">
      <video src={src} loop autoPlay muted className="rounded-2xl absolute inset-0 top-0 left-0 size-full object-cover object-center"/>

      <div className="relative z-10 size-full flex-col justify-between p-5 text-blue-50">
        <h1 className="poppins-bold text-5xl text-blue-50 m-4">{title}</h1>
        {desc?<p className="p-5 max-w-84 poppins-light">{desc}</p>:<></>}
      </div>
    </div>
  )
}


const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className="mx auto px-3 md:px-10">
          <div className="px-5 py-32">
            <p className="poppins-bold text-[40px] text-blue-50">Into the Metagame Layer</p>
          </div>

          <p className="max-w-md poppins-light text-3xl text-blue-50 opacity-50">where strategy goes beyond gameplay—explore rankings, player trends, hidden tactics, and community insights that shape how games evolve outside the battlefield.</p>
        </div>

        <div className="m-4">
          <div className="relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
            <Card title={"Radint"} src={'public/videos/feature-1.mp4'} desc="Radint delivers fast-paced action and competitive intensity, challenging players with sharp tactics, quick reflexes, and evolving strategies. Master the arena, outplay opponents, and rise through the ranks in this thrilling gaming experience." />
          </div>

          <div className="grid h-[135vh] grid-cols-2 grid-rows-2 gap-7">
            <div className="row-span-1 md:col-span-1 md:row-span-2">
              <Card src={'public/videos/feature-2.mp4'} title={'Zigma'} desc="Zigma delivers a bold gaming experience packed with intense action, smart strategy, and immersive challenges. Compete, adapt, and dominate every match as you push your skills to the next level."/>
            </div>

            <div className="row-span-1 ms-32 md:col-span-1 md:ms-0 gap-7">
              <Card title={'Nexus'} desc={'Nexus is the central hub where players connect, compete, and discover new gaming experiences. Track trends, explore strategies.'} src={'public/videos/feature-3.mp4'}/>
              <Card title={'Azul'} desc={'Azul drops players into a fast-paced arena where precision, strategy, and teamwork decide victory. Master powerful abilities.'} src={'public/videos/feature-4.mp4'}/>
            </div>

          </div>

          <div className="h-96 mt-5 w-full overflow-hidden rounded-md md:h-[65vh] grid grid-cols-2 gap-7 ">
            <Card title={''} src={'public/videos/feature-5.mp4'}/>
            <div className="border border-blue-50 w-full mt-5 h-full rounded-3xl bg-purple-600 p-7 relative">
              <h2 className="text-blue-50 text-3xl poppins-bold opacity-75">More comming<br/><span className="Poppins-extraBold text-6xl">Soon!</span> </h2>
             
            </div>
          </div>
        </div>
    </section>
  )
}

export default Features