import { faHandHoldingDollar, faHandsHoldingChild } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons/faHandHoldingHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Context() {
  return (
    <div className='w-full py-10 px-5 bg-[#bc50ee] bg-opacity-60 flex flex-wrap justify-evenly items-start gap-10 md:gap-5'>
        <div className='flex flex-col items-center gap-4 p-4 bg-[#e8c8fd] rounded shadow-md w-[360px]  hover:cursor-pointer hover:scale-[101%] transition-transform'>
            <div className='h-[70px] w-[70px] flex items-center justify-center'>
                <FontAwesomeIcon icon={faHandHoldingHeart} className="text-5xl" />
            </div>
            <ul className='text-center'>
                <li className='font-bold text-lg'>Connect with Scholarships</li>
                <li>Track applications and connect with providers</li>
            </ul>
        </div>

        <div className='flex flex-col items-center gap-4 p-4 bg-[#e8c8fd] rounded shadow-md w-[360px]  hover:cursor-pointer hover:scale-[101%] transition-transform'>
            <div className='h-[70px] w-[70px] flex items-center justify-center'>
                <FontAwesomeIcon icon={faHandHoldingDollar} className="text-5xl" />
            </div>
            <ul className='text-center'>
                <li className='font-bold text-lg'>Find Financial Aid</li>
                <li>Explore various funding opportunities for your education</li>
            </ul>
        </div>

        <div className='flex flex-col items-center gap-4 p-4 bg-[#e8c8fd] rounded shadow-md w-[360px]  hover:cursor-pointer hover:scale-[101%] transition-transform'>
            <div className='h-[70px] w-[70px] flex items-center justify-center'>
                <FontAwesomeIcon icon={faHandsHoldingChild} className="text-5xl" />
            </div>
            <ul className='text-center'>
                <li className='font-bold text-lg'>Get Personalized Advice</li>
                <li>Receive tailored guidance on scholarship applications</li>
            </ul>
        </div>
    </div>
  )
}
