import React from "react";
import homebuildOne from "../../images/svg/homebuildOne.svg";
import homebuildTwo from "../../images/svg/homebuildTwo.svg";
import homebuildThree from "../../images/svg/homebuildThree.svg";
import buildFour from "../../images/svg/buildFour.svg";
import { strings } from '../../Utils/String'
import Card from "../CardsComponents/Cardcontent/Card"

function PageTwoComponent({setopenComponent, setPropertyType}) {
  return (
    <>
      <div className="sm:border-[#ECECEC] sm:bg-[#ffffff] sm:border-[8px] rounded-3xl">
        <div className="font-bold mt-7 w-[90%] mx-auto md:text-2xl text-xl">
          What can we help you with?
        </div>
        <div className="text-xs mt-4 w-[90%] mx-auto font-normal">
          Question 1 of 5
        </div>
        <div className="w-[90%] mx-auto bg-gray-200 mt-2 h-2.5 #EDF3F3">
          <div className="bg-[#715BA8] h-2.5" style={{ width: "40%" }} />
        </div>
        <div className="flex cursor-pointer justify-center text-center m-5 flex-wrap">
        <div onClick={()=>setPropertyType("Detached House")}>
        <Card
        setopenComponent={setopenComponent}
        value={3}
        image={homebuildOne} content={strings.detached} />
        </div>
        <div onClick={()=>setPropertyType("Semi-Detached House")}>
        <Card 
        setopenComponent={setopenComponent}
        value={3} 
        image={homebuildTwo} content={strings.semiDetached} />
        </div>
        <div onClick={()=>setPropertyType("Townhouse")}>
        <Card
        setopenComponent={setopenComponent}
        value={3} 
        image={homebuildThree} content={strings.town} />
        </div>
        <div onClick={()=>setPropertyType("Condo")}>
        <Card
        setopenComponent={setopenComponent}
        value={3} 
        image={buildFour} content={strings.Condo} />
        </div>
        </div>
        {/* <div className="flex cursor-pointer m-5 flex-wrap">
          <div className="flex flex-col p-3 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
            <img className="sm:w-40 sm:h-20" src={nuborrowcollection} />
            <div className="text-black  py-4 text-center">content</div>
          </div>

          <div className="flex flex-col p-3 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
            <img className="sm:w-40 sm:h-20" src={nuborrowbank} />
            <div className="text-black py-4 text-center">content</div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default PageTwoComponent;
