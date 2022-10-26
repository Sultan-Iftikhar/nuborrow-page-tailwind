import React from 'react'

function ResTable({header,content}) {
  return (
    <>
      <div className="block sm:hidden flex my-2">
        <div className="text-left p-5 font-bold font-sans text-white min-w-[50%] rounded-l-2xl bg-[#715BA8] p-8">
          {header}
        </div>
        <div className="text-left p-5 font-bold font-sans min-w-[50%] text-black p-8">
          {content}
        </div>
      </div>
    </>
  )
}

export default ResTable
