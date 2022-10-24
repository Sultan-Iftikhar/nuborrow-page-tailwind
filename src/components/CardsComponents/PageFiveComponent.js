import React from 'react'

function PageFiveComponent({
  setName,
  setContact,
  setEmail,
  setinpAddress,
  handleLandingPageData,
  setzipCode,
  setState,
  setCity,
  setPlace,
}) {
  return (
    <>
      <div className="sm:border-[#ECECEC] sm:border-[8px] rounded-3xl xs:border-[#ECECEC]">
        <div className="font-bold mt-7 w-[90%] mx-auto md:text-2xl text-center text-xl">
          Amazing! You're no-cost reports are waiting for you.
        </div>
        <div className="md:text-xs text-[8px] font-normal my-4 w-[70%] mx-auto">
          ( Your best guess is ok. We will provide you with a no-cost home
          equity report )
        </div>
        <div className="text-xs my-4 w-[90%] mx-auto font-normal">
          Question 4 of 5
        </div>
        <div className="w-[90%] mx-auto bg-gray-200 mt-2 h-2.5 #EDF3F3">
          <div className="bg-[#715BA8] h-2.5" style={{ width: '100%' }} />
        </div>
        <div className="font-bold lg:text-2xl md:text-xl text-center mx-auto w-[90%] md:py-16 py-8">
          {/* Form******************** */}

          <form >
            <div className="mb-5">
              <input 
                type="text"
                onChange={e => {
                  // setNameE(e.target.value)
                  setName(e.target.value)
                  // setNameError("")
                }}
                className="bg-gray-50 border sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-5">
              <input 
                type="email"
                className="bg-gray-50 border sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-5">
              <input 
                type="email"
                className="bg-gray-50 border sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-5">
              <input 
                type="email"
                className="bg-gray-50 border sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
                placeholder="Your name"
                required
              />
            </div>
          </form>
          <div className="w-[90%] mx-auto">
          <div className="w-[100%] text-center m-auto">
            <button className="bg-[#715BA8] rounded-full md:text-xl md:font-bold text-[white] sm:w-[30%] sm:py-[8px] sm:px-[40px] py-[5px] px-[35px] my-[0px] hover:bg-[#715BA8]-600 active:bg-[#715BA8]-700 focus:outline-none focus:ring focus:ring-violet-300">
              Next
            </button>
          </div>
        </div>

          {/* Form******************** */}
        </div>
      </div>
    </>
  )
}

export default PageFiveComponent
