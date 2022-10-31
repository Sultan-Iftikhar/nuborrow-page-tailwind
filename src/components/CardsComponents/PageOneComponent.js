import React from 'react'
import wallet from '../../images/png/nuborrowwallet.png'
import nuborrowcard from '../../images/png/nuborrowcard.png'
import nuborrowcollection from '../../images/png/nuborrowcollection.png'
import nuborrowbank from '../../images/png/nuborrowbank.png'
import Card from '../CardsComponents/Cardcontent/Card'
import { strings } from '../../Utils/String'

function PageOneComponent({ setopenComponent, setProduct }) {
  return (
    <>
      <div className="sm:border-[#ECECEC] sm:border-[8px] sm:bg-[#ffffff] rounded-3xl">
        <div className="font-bold mt-7 w-[90%] mx-auto md:text-2xl text-xl">
          What can we help you with?
        </div>
        <div className="text-xs mt-4 w-[90%] mx-auto font-normal">
          Question 1 of 5
        </div>
        <div className="w-[90%] mx-auto bg-gray-200 mt-2 h-2.5 #EDF3F3">
          <div className="bg-[#715BA8] h-2.5" style={{ width: '20%' }} />
        </div>
        <div className="flex cursor-pointer justify-center text-center m-5 flex-wrap">
          <div className='sm:flex'>
          <div onClick={() => setProduct('Home Equity Loan - Cash Out')}>
          <Card
            image={wallet}
            content={strings.wallet}
            setopenComponent={setopenComponent}
            value={2}
          />
          </div>
          <div onClick={()=>setProduct("Home Equity Loan Of Credit")}>
          <Card
          image={nuborrowcard} content={strings.strip}
          setopenComponent={setopenComponent}
          value={2}
          />
          </div>
          </div>
          <div className='sm:flex'>
          <div onClick={()=>setProduct("Debt Consolidation Home Equity Loan")} >
          <Card
          image={nuborrowcollection} content={strings.collection}
          setopenComponent={setopenComponent}
          value={2}
          />
          </div>
          <div onClick={()=>setProduct("Refinance My Current Mortgage")}>
          <Card
          image={nuborrowbank} content={strings.bank}
          setopenComponent={setopenComponent}
          value={2}
          />
          </div>
          </div>
          {/* <div className="flex flex-col sm:p-6 m-5 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
            <img className="sm:w-40 sm:h-20" src={wallet} />
            <div className="text-black py-4 text-center">content</div>
          </div> */}
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
          </div>
        </div> */}
          {/* <div className="flex cursor-pointer m-5 flex-wrap">
          <div className="flex flex-col p-3 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
            <img className="sm:w-40 sm:h-20" src={nuborrowcollection} />
            <div className="text-black  py-4 text-center">content</div>
          </div>

          <div className="flex flex-col p-3 border-solid hover:shadow-md border-[#ECECEC] border-[8px] rounded-3xl">
            <img className="sm:w-40 sm:h-20" src={nuborrowbank} />
            <div className="text-black py-4 text-center">content</div>
          </div>*/}
        </div>
      </div>
    </>
  )
}

export default PageOneComponent
