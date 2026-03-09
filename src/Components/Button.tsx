import React from 'react'

const Button = ({icon,id,title,containeerclass,textColor}) => {
  return (
    <div >
        <button id={id} className={`bg-yellow-600 flex gap-3 group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 ${containeerclass} text-black m-2`}>{icon}
            <span className={`relative inline-flex ${textColor} overflow-hidden poppins-bold text-xs uppercase `}>
                <div>
                    {title}
                </div>
            </span>
        </button>
    </div>
  )
}

export default Button