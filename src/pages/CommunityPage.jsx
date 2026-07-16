import React from 'react'
import Sidebar from '../components/UI/Sidebar'

const CommunityPage = () => {
  const sort = [
    "Top Rated",
    "Most Recent",
    "Most active",
  ]
  return (
    <div className='flex w-full h-screen '>
      {/* left side */}
      <div className='w-[15%] h-full border border-red-400'>
        <div className='w-full flex flex-col '>
          <div className='flex flex-col p-2 gap-1 border border-pink-600'>
            <div className='text-2xl text-blue-600 font-semibold'>Community Hub</div>
            <div>Connect, share and grow together </div>
          </div>
          <div className=''>
            <button className='bg-blue-600 text-white font-semibold'>
              Start Discussion
            </button>
          </div>
          <div className='flex flex-col justify-between'>
            <Sidebar/>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='w-[85%] h-full border border-green-500 '>
        <div className='flex flex-col w-full border px-2 py-3 border-orange-500'>
          <div className='text-3xl'>Popular Discussion</div>
          <div className='flex border border-black justify-between items-center-safe'>
            <div className='flex border border-amber-400'>Trending topics in the learning community right now.
            </div>
            <div className='flex border border-red-400 gap-x-3'>
            <div>SORT BY:</div>
            <div>
              <select
            name=""
            id=""
            className="border rounded-md  w-full"
          >
            <option value="">Top Rated</option>

            {sort.map((rate, index) => (
              <option key={index} value={rate}>
                {rate}
              </option>
            ))}
          </select>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CommunityPage