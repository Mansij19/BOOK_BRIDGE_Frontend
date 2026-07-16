import React from 'react'

const CommunityPage = () => {
  return (
    <div className='flex w-full h-screen '>
      {/* left side */}
      <div className='w-[15%] h-full border border-red-400'>
        <div className='w-full flex flex-col justify-centre items-centre'>
          <div className='flex flex-col p-2 gap-1 border border-pink-600'>
            <div className='text-2xl text-blue-600 font-semibold'>Community Hub</div>
            <div>Connect, share and grow together </div>
          </div>
          <div className=''>
            <button className='bg-blue-600 text-white font-semibold'>
              Start Discussion
            </button>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className='w-[85%] h-full border border-green-500'>
        
      </div>
    </div>
  )
}

export default CommunityPage