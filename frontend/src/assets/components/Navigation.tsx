import { faArrowDownShortWide, faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navigation() {
  return (
    <>
        <nav className='w-[100%] p-7 px-[100px] shadow-lg shadow-[#d16dff52] mb-[30px] flex justify-between items-center sticky right-0 top-0 z-50 bg-white'>
            <div className='flex justify-center items-center'>
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                <h3 className='font-bold text-xl'>Scholar<span className='text-[#4b1963]'>Connect</span></h3>
            </div>

            <div className='flex justify-center items-center gap-10'>
              <div className='flex hover:cursor-pointer items-center gap-2'>
                <FontAwesomeIcon className='text-[#451a58]' icon={faSearch} />
                <p>Search</p>
              </div>
              <div className='flex hover:cursor-pointer items-center gap-2'>
                <FontAwesomeIcon className='text-[#451a58]' icon={faArrowDownShortWide} />
                <p>Filter</p>
              </div>
            </div>
        </nav>
    </>
  )
}
