import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";


//register GSAP Plugins

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
        end: "+=800",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      }
    });

    tl.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      ease: "none"
    });

  }, []);

  

  return (
    <div id="about" className="w-screen min-h-screen">

      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">

        <p className="poppins-bold text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle title={"Discover the World's Largest Shared Adventure"} sectionId="#about"/>

        <div className="absolute bottom-10 text-center">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms,
            both digital and physical, into a unified Play Economy
          </p>
        </div>

        {/* Scroll Section */}
        <div id="clip" className="h-screen w-screen flex items-center justify-center">

          {/* IMPORTANT: initial size + relative + overflow-hidden */}
          <div className="mask-clip-path relative w-96 h-96 rounded-3xl overflow-hidden">
            <img
              src="/img/about.webp"   // ✅ Correct public folder usage
              alt="About"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;