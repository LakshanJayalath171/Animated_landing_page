import { useRef,useEffect,useState } from "react"
import logo from "../../public/img/logo.png"
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap/all";





const Navbar = () => {

    const navContaineerRef = useRef(null)
    const navItems = ["Nexus","Vault","Prologue","About","Contact"];

    const [isVisible,setIsVisible] = useState(true)
    const [lastScrollY,setLastScrollY] = useState(10)

    const {y:currentScrollY} = useWindowScroll()

    useEffect(()=>{
        if(currentScrollY == 0){
            setIsVisible(true)
            navContaineerRef.current.classList.remove('bg-black')
        }
        else if(currentScrollY>lastScrollY){
            setIsVisible(false)
            navContaineerRef.current.classList.add('bg-black')
        }
        else if(currentScrollY<currentScrollY){
            setIsVisible(true)
            
            navContaineerRef.current.classList.add('bg-black')
        }
        setLastScrollY(currentScrollY)
       
    },[currentScrollY])

    useEffect(()=>{
        gsap.to(navContaineerRef.current,{
            y:isVisible?1:-100,
            opacity:isVisible ? 1:0,
            duration:0.2,
        })
    },[])

  return (
    <div ref={navContaineerRef}  className="fixed bg-black inset-x-0 top-0 left-0 rounded-2xl border-none z-50 h-12 w-[1300px] mt-0.5 transition-all duration-700 sm:inset-x-6">
        <header className="absolute top-1/2 w-full -translate-y-1/2">

         <nav className="flex size-full items-center justify-between p-4">

            {/* Left side */}
            <div className="flex items-center gap-7">
                <img src={logo} alt="logo" className="w-10"/>
                <Button icon={<TiLocationArrow/>} title={"Products"} id="products-button" containeerclass={"bg-blue-50 md:flex hidden items-center justify-center gap-1"}/>
            </div>

            {/* Right side  */}
            <div className="flex pr-4 h-full items-center">
                <div className="hidden md:block">
                    {navItems.map((items,index)=>(
                        <a href={`${items.toLowerCase()}`} key={index} className="text-blue-50 poppins-bold mx-2 after:content-[''] relative inline-block after:absolute after:bottom-0 after:left-0 cursor-pointer after:h-[2px] after:w-full after:bg-blue-50 after:mt-1 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">{items}</a>
                    ))}
                </div>
            </div>

         </nav>
        </header>
    </div>
  )
}

export default Navbar