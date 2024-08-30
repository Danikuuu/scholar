import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero() {
  return (
    <div className='flex justify-center items-center flex-col gap-10 p-[100px] h-[800px]'>

        <div className='w-[200px] h-[200px] flex items-center justify-center'>
          <FontAwesomeIcon icon={faSearch} className='text-9xl'/>
        </div>

        <h1 className='font-bold text-5xl text-center mb-4 '>
            Explore Your Scholarship Options <br />
            and Maximize Your Potential
        </h1>
        <h2 className='text-xl text-center text-gray-700'>
            Find the right opportunities to advance your education.
        </h2>

    </div>
  )
}
