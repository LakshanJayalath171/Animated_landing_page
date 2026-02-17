import { useRef, useState } from "react"


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
    
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden ">
        <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">

            <div>
                <div className="mask-clip-path mt-[350px] ml-[150px] absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100" onClick={handleVideoClick}>
                        <video ref={videoRef} 
                        src={getVideoIndex(upcommingVideoIndex)}
                        muted
                        loop
                        className="size-32 origin-center scale-150 object-cover object-center"
                        onLoadedData={handleVideoLoad}/>
                    </div>
                </div>

                <video autoPlay muted loop src={getVideoIndex(currentIndex)} className="absolute  z-20 object-cover object-center " onLoadedData={handleVideoLoad}/>
                <video src={getVideoIndex(currentIndex===totalVideo-1)} autoPlay loop muted className="absolute left-0 top-0 size-full object-cover object-center" onLoad={handleVideoLoad}/>
            </div>
        </div>
    </div>
  )
}

export default Hero