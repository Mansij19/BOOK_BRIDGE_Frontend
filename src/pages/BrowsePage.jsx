import React from 'react'
import BrowseResources from '../components/section/components/BrowseResources'
const BrowsePage = () => {
  return (
    <div className='w-1/4 bg-gray-100 max-h-screen p-5'>
      {/* left items */}
      <div className='flex flex-col h-screen w-1/5 '>
        <div className='text-2xl font-semibold text-gray-800'> Discover Educational Resources </div>
        <div className='text-black'>
        Explore thousands of verified study materials from top universities.
      </div>
      <div>SUBJECT</div>
      <div className='w-auto h-2'>
         <div>All</div>
         <div>Computer Science</div>
         <div>Engineering</div>
         <div>Business</div>
      </div>
      </div>
     
      {/* right items */}
      <div className='w-'>
        <BrowseResources/>
      </div>
      
    </div>
  )
}

export default BrowsePage