import React from "react";

function PageThreeComponent() {
  return (
    <>
      <div className="border-[#ECECEC] border-[8px] rounded-3xl">
        <div className="font-bold mt-7 w-[90%] mx-auto md:text-2xl text-xl">
          How much do you think your home is worth?
        </div>
        <div className="text-xs font-normal my-4 w-[70%] mx-auto">
          ( Your best guess is ok. We will provide you with a no-cost home
          equity report )
        </div>
        <div className="text-xs my-4 w-[90%] mx-auto font-normal">
          Question 3 of 5
        </div>
        <div className="w-[90%] mx-auto bg-gray-200 mt-2 h-2.5 #EDF3F3">
          <div className="bg-[#715BA8] h-2.5" style={{ width: "45%" }} />
        </div>
      </div>
    </>
  );
}

export default PageThreeComponent;
