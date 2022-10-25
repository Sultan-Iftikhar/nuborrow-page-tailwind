import React from 'react'

function Card({ image, content, setopenComponent, value }) {
  return (
    <>
      <div onClick={() => setopenComponent(value)} className="flex cursor-pointer justify-center text-center m-5 flex-wrap border-[#ECECEC] sm:border-[8px] border-[4px] rounded-3xl border-solid hover:shadow-md">
        <div className="flex flex-col sm:p-6 m-5">
          <img className="sm:w-40 sm:h-20" src={image} />
          <div className="text-black pt-6 text-[10px] text-center">
            {content}
          </div>
        </div>
        {/* *************************** */}
        {/* <div className="flex flex-col sm:p-6 m-5 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
          <img className="sm:w-40 sm:h-20" src={nuborrowcard} />
          <div className="text-black py-4 text-center">content</div>
        </div>
        <div className="flex flex-col sm:p-6 m-5 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
          <img className="sm:w-40 sm:h-20" src={nuborrowcollection} />
          <div className="text-black py-4 text-center">content</div>
        </div> */}
        {/* *************************** */}
        {/* <div className="flex flex-col sm:p-6 m-5 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
          <img className="sm:w-40 sm:h-20" src={nuborrowbank} />
          <div className="text-black py-4 text-center">content</div>
        </div> */}
      </div>
    </>
  )
}

export default Card
