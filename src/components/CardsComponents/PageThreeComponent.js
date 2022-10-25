import React from 'react'
import { PrettoSlider } from '../CardsComponents/slider/Slider.js'

function PageThreeComponent({
  setopenComponent,
  sethomeCost,
  home_value,
  _formatCurrency,
}) {
  return (
    <>
      <div className="sm:border-[#ECECEC] sm:bg-[#ffffff] sm:border-[8px] rounded-3xl xs:border-[#ECECEC]">
        <div className="font-bold mt-7 w-[90%] mx-auto md:text-2xl text-xl">
          How much do you think your home is worth?
        </div>
        <div className="md:text-xs text-[8px] font-normal my-4 w-[60%] mx-auto">
          ( Your best guess is ok. We will provide you with a no-cost home
          equity report )
        </div>
        <div className="text-xs my-4 w-[90%] mx-auto font-normal">
          Question 3 of 5
        </div>
        <div className="w-[90%] mx-auto bg-gray-200 mt-2 h-2.5 #EDF3F3">
          <div className="bg-[#715BA8] h-2.5" style={{ width: '45%' }} />
        </div>
        <div className="font-bold lg:text-2xl md:text-xl text-center mx-auto w-[90%] md:py-16 py-8">
          <h1>{_formatCurrency(home_value)}</h1>
        </div>
        <div className="w-[90%] mx-auto">
          <PrettoSlider
            // style={{ width: "90%", margin: "30px auto" }}
            onChange={(e) => sethomeCost(e.target.value)}
            defaultValue={50000}
            step={10000}
            min={50000}
            max={2000000}
          />

          <div className="w-[100%] text-center m-auto">
            <button
              onClick={({ value = 4 }) => {
                setopenComponent(value)
              }}
              className="bg-[#715BA8] rounded-full md:text-xl md:font-bold text-[white] sm:py-[8px] sm:px-[40px] py-[5px] px-[35px] my-[40px] hover:bg-[#715BA8]-600 active:bg-[#715BA8]-700 focus:outline-none focus:ring focus:ring-violet-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageThreeComponent
