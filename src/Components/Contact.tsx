import Button from "./Button"

const ImageClip = ({src,clipPath})=>(
    <div className={clipPath}>
      <img src={src} alt="contact image 1" />
    </div>
)

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10 ">
        <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
            <div className="absolute-left-20 top-hidden left-20 h-full w-50 m-5 overflow-hidden sm:block lg-left-20 lg-w-96">
                <ImageClip src="public/img/contact-1.webp" clipPath="smal_image_clip_path"/>
                <ImageClip src="public/img/contact-2.webp" clipPath="smal_image_clip_path lg:translate-y-40 translate-y-60"/>
            </div>

            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 ">
                <ImageClip src="public/img/swordman-partial.webp" clipPath="absolute md:scale-125"/>
                <ImageClip src="public/img/swordman.webp" clipPath="md:scale-125 regtangle_clip_path"/>
            </div>

            <div className="flex flex-col items-center text-center">
                <p className=" poppins-bold text-[10px] uppercase">Join Zenatry</p>
                <p className="poppins-bold mt-10 w-full  leading-[0.9] text-5xl uppercase">let's build a new <br/>era of <br/><span className="text-7xl poppins-extrabold">gaming</span> Together</p>
                <Button title="contact us" containeerclass="cursor-pointer" textColor="text-blue-50"/>
            </div>
        </div>
    </div>
  )
}

export default Contact