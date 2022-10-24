import React, { useState } from 'react'
// Icons
import Phoneicon from '../../images/png/phoneicon.png'
import CardIcon from '../../images/png/stripcont.png'
import Sheild from '../../images/png/lock.png'
// components
import PageOneComponent from '../CardsComponents/PageOneComponent'
import PageTwoComponent from '../CardsComponents/PageTwoComponent'
import PageThreeComponent from '../CardsComponents/PageThreeComponent'
import PageFourComponent from '../CardsComponents/PageFourComponent'
import PageFiveComponent from '../CardsComponents/PageFiveComponent'

function index() {
  // Open targated component hook
  const [openComponent, setopenComponent] = useState(1)
  // Open targated component hook

  return (
    <>
      {/* ************************Header cards************************* */}
      <section className="bg-[#ffffff]">
        <div className="container flex flex-wrap sm:w-[90%] md:h-[100%] m-auto px-5 py-5">
          <div className="lg:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10">
            {/* <PageOneComponent /> */}
            {/* <PageTwoComponent /> */}
            {/* <PageThreeComponent /> */}
            {/* <PageFourComponent /> */}
            {/* <PageFiveComponent /> */}

            {/* ******************************* */}
            {openComponent === 1 ? (
              <PageOneComponent
                setopenComponent={setopenComponent}
                // setProduct={setProduct}
              />
            ) : openComponent === 2 ? (
              <PageTwoComponent
                // setopenComponent={setopenComponent}
                // setPropertyType={setPropertyType}
              />
            ) : openComponent === 3 ? (
              <PageThreeComponent
                // setopenComponent={setopenComponent}
                // sethomeCost={sethomeCost}
                // home_value={home_value}
                // _formatCurrency={_formatCurrency}
              />
            ) : openComponent === 4 ? (
              <PageFourComponent
                // setopenComponent={setopenComponent}
                // setCost={setCost}
                // cost={cost}
                // _formatCurrency={_formatCurrency}
              />
            ) : (
              <PageFiveComponent
              // setName={setName}
              // setContact={setContact}
              // setEmail={setEmail}
              // setinpAddress={setinpAddress}
              // handleLandingPageData={handleLandingPageData}
              // setPlace={setPlace}
              // setCity={setCity}
              // setState={setState}
              // setzipCode={setzipCode}
              />
            )}
            {/* ******************************* */}
          </div>
          <div className="lg:w-1/2 md:pr-12 md:pb-8 mb-10 md:mb-0 pb-10">
            <h1 className="sm:text-3xl text-2xl font-black my-4 title-font mb-2 text-gray-900">
              We've <span className="text-[#715BA8]">SAVED</span> Canadians over
              8.5<span className="text-[#715BA8]"> MILLION</span> in debt over
              the last 10 years.
            </h1>
            <p className="font-normal text-xl my-4 font-[#000000]">
              With Nuborrow you get a customized borrowing power report that
              includes your credit score, estimated equity in your home, and the
              best mortgage options available.
            </p>

            <div className="flex-col">
              <a className="inline-flex items-center my-2">
                <img
                  alt="testimonial"
                  src={Phoneicon}
                  className="w-20 h-20 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-[black] font-semibold md:text-xl sm:text-xl">
                    Easily access your free credit score, home equity report,
                    and pre-approved options on our mobile app
                  </span>
                </span>
              </a>

              <a className="inline-flex items-center my-2">
                <img
                  alt="testimonial"
                  src={CardIcon}
                  className="w-20 h-20 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-[black] font-semibold md:text-xl sm:text-xl">
                    No credit or income requirements needed to be approved
                  </span>
                </span>
              </a>

              <a className="inline-flex items-center my-2">
                <img
                  alt="testimonial"
                  src={Sheild}
                  className="w-20 h-20 flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-[black] font-semibold md:text-xl sm:text-xl">
                    Safe and secure process. Nuborrow is an A+ Better Business
                    ranked company with 1,000's of Google reviews.
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
