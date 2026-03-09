import { FaDiscord, FaFacebook, FaReddit, FaYoutube } from "react-icons/fa"

const Links = [
    {href:"https://www.discord.com",icon:<FaDiscord/>},
    {href:"https://www.facebook.com",icon:<FaFacebook/>},
    {href:"https://www.youtube.com",icon:<FaYoutube/>},
    {href:"https://www.reddit.com",icon:<FaReddit/>},
]


const Footer = () => {
  return (
    <footer className="w-screen bg-violet-400 py-4 text-black 
    ">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row">
            <p className="poppins-bold text-center text-sm md:text-left">&copy; 2025 Zentry. All right Reserved</p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-2">
            {Links.map((items,index)=>(
                <a key={index} className="text-black transition-colors text-[21px] duration-500 ease-in-out hover:text-white" href={items.href} target="blank" clas>{items.icon}</a>
            ))}
        </div>
    </footer>
  )
}

export default Footer