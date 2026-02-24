import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti";
import Button from "../Components/Button.jsx"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

    // defining all state variables
    const [currentIndex,setCurrentIndex] = useState(1);
    const [hasClicked,setHasClicked] = useState(true);
    const [loading,setLoading] = useState(false);
    const [loadedVideo,setLoadedVideos] = useState(0);

    // defining all variables
    const totalVideo = 3;
    const getVideoIndex = (index:any)=>`public/videos/hero-${index}.mp4`
    const upcommingVideoIndex = (currentIndex % totalVideo)+1;
    
    // references 
    const videoRef = useRef(null);
    const nextVideoRef = useRef(null);
    // functions
    const handleVideoClick = ()=>{
        setHasClicked(true);
        if(currentIndex>=totalVideo){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex((prevIndex)=>prevIndex+1)
        }
        
    }

    const handleVideoLoad = ()=>{
        setLoadedVideos((prev)=>prev+1)
    }


    // GSAP Animation section 

    // useGSAP(()=>{
    //     if(hasClicked){
    //         gsap.set("#next-video",{visibility:'visible'})
    //     }

    //     gsap.to("#next-video",{
    //         transformOrigin:'center center',
    //         scale:1,
    //         width:"100%",
    //         height:"100%",
    //         duration:1,
    //         ease:"power1.inOut",
    //         onStart:()=>videoRef.current.play(),
    //     })

    //     gsap.from("#current-video",{
    //         transformOrigin:"center center",
    //         scale:0,
    //         duration:1.5,
    //         ease:"power1.inOut"
    //     })
    // },{dependencies:[currentIndex],revertOnUpdate:true})
    
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden ">
        <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">

            <div>
                <div className="mask-clip-path absolute z-50 flex items-center justify-center w-full h-screen  size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 " onClick={handleVideoClick}>
                        <video ref={videoRef} 
                        src={getVideoIndex(upcommingVideoIndex)}
                        muted
                        autoPlay
                        loop
                        className="size-32 origin-center scale-150 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                        id="next-video"/>
                    </div>
                </div>

                <video  autoPlay muted loop src={getVideoIndex(currentIndex)} className="absolute  z-20 object-cover object-center " onLoadedData={handleVideoLoad}/>
                <video  id="current-video" src={getVideoIndex(currentIndex===totalVideo-1)} autoPlay loop muted className="absolute left-0 top-0 size-full object-cover object-center rounded-none" onLoad={handleVideoLoad}/>
            </div>

            <h1 className="absolute bottom-5 right-5 z-40 text-blue-75 poppins-extrabold text-6xl text-white">G<span className="font-extrabold text-[80px]">A</span>MING</h1>
            <h1 className="absolute bottom-5 right-5 z-10 text-blue-75 poppins-extrabold text-6xl text-black">G<span className="font-extrabold text-[80px]">A</span>MING</h1>
            {/* upper division  */}

            <div className="absolute top-0 left-0 z-40 size-full m-3">
                <h2 className="text-6xl text-white poppins-extrabold">REDEFINE</h2>
                <p className="text-white text-[15px] poppins-light">Enter the metagame layer</p>
                <p className="text-white text-[15px] poppins-light">Unleash the play economy</p>

                <Button icon={<TiLocationArrow/>} title={"Watch The Trailer"} id={1} containeerclass={"bg-yellow-500"}/>
            </div>
        </div>
    </div>
  )
}

export default Hero