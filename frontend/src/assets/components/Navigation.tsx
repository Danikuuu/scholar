import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  return (
    <>
        <nav className='w-[100%] p-7 px-[100px] shadow-lg shadow-[#d16dff52] mb-[30px] flex xl:justify-between lg:justify-between md:justify-between sm:justify-center xs:justify-center items-center sticky right-0 top-0 z-50 bg-white'>
            <div className='flex justify-center items-center'>
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                <FontAwesomeIcon icon={faGraduationCap} className="text-4xl" />
                <h3 className='font-bold text-xl'>Scholar<span className='text-[#4b1963]'>Connect</span></h3>
            </div>

            <div className="hidden xl:block lg:block md:block">
              <p className="text-lg font-bold cursor-pointer hover:text-[#4b1963]">Scholarships</p>
            </div>
        </nav>
    </>
  )
}
