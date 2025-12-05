import React from 'react'

const FirstAbout = () => {
  return (
    <div className='bg-[#111111] px-10 py-15 md:px-20 md:py-40 lg:px-50'>
      <div className='gap-10 text-white 2xl:flex items-center justify-center'>
          <div className=''>
              <div>
                  <p className='uppercase text-xs sm:text-md md:text-lg'>Digital Marketing Sunshine coast</p>
              </div>
              <br/>
              <div>
                  <p className='text-4xl font-semibold'>Marketing isn't about shouting the loudest; <span className='text-[#F34D01]'>it's about resonating the deepest...</span></p>
              </div>
          </div>
          <br/>
          <div>
            <p className='text-2xl'>Our passionate marketing team has established us as one of the most awarded digital marketing agencies in Australia. So, know that we’ve got the expertise, experience and passion to make your next marketing campaign successful!</p>
          </div>
      </div>
    </div>
  )
}

export default FirstAbout