import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Hero() {
  return (
    <div className='flex justify-center items-center flex-col gap-10 p-[100px] h-[800px]'>

        <div className='w-[200px] h-[200px] flex items-center justify-center'>
          <FontAwesomeIcon icon={faSearch} className='text-9xl'/>
        </div>

        <h1 className='font-bold text-5xl text-center'>Discover Scholarship opportunity <br />and make the best out of it</h1>
    </div>
  )
}
