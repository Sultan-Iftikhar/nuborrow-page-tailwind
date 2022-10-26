import React, { useState } from 'react'
// Packages
import axios from 'axios'
import Swal from 'sweetalert2'
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

function Index() {
  // Open targated component hook
  const [openComponent, setopenComponent] = useState(1)
  // Open targated component hook

  // states to POST data
  const [product, setProduct] = useState()
  const [propertyType, setPropertyType] = useState()
  const [cost, setCost] = useState(25000)
  const [name, setName] = useState()
  const [contact, setContact] = useState()
  const [email, setEmail] = useState()
  const [address, setinpAddress] = useState()
  const [place, setPlace] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zipCode, setzipCode] = useState()
  const [home_value, sethomeCost] = useState(50000)

  // *********
  const _formatCurrency = (home_value) => {
    return (
      '$' +
      parseFloat(home_value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    )
  }

  const handleLandingPageData = async () => {
    // console.log("************data is handled**************")

    // *****************Phone number valid or note API*********************

    console.log(product)
    console.log(propertyType)
    console.log(cost)
    console.log(home_value)
    console.log(name)
    console.log(contact)
    console.log(email)
    console.log(place)
    console.log(city)
    console.log(state)
    console.log(zipCode)

    // *************Build formData object.***************

    // --------------------------------------
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your details has been saved',
      showConfirmButton: false,
      timer: 1500,
    })
    // --------------------------------------

    let formData = new FormData()
    formData.append('place', place)
    // formData.append("product_id", "4")
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', contact)
    formData.append('product', product)
    formData.append('city', city)
    formData.append('state', state)
    formData.append('zipCode', zipCode)
    formData.append('money_need', `$${cost}`)
    formData.append('home_value', `$${home_value}`)
    formData.append('propertyType', propertyType)

    // *********************API starts**********************

    try {
      const data = await axios({
        method: 'post',
        url:
          'https://corsproxyapi.herokuapp.com/https://dev.nu2morrow.com/crm/apis/lead/add_landingpage',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      // console.log(data)
    } catch (err) {
      // console.log(err.message)
    }
    console.log(formData)

    // *************************API ends*************************

    // console.log(`$${home_value}`)
    // console.log(`$ ${cost}`)

    setProduct('')
    setPropertyType('')
    setCost('')
    setName('')
    setContact('')
    setEmail('')
    setinpAddress('')
    setPlace('')
    setCity('')
    setState('')
    setzipCode('')
    sethomeCost('')

    window.location.href = 'https://nuborrow.com/' //Will take you to Nuborrow Web App.
  }

  return (
    <>
      {/* ************************Header cards************************* */}
      <section className="bg-[#FAF8FF] w-[100%]">
        <div className="container flex flex-wrap sm:w-[90%] md:h-[50%] sm:mx-auto m-auto px-5 py-5">
          <div className="lg:w-1/2 md:pr-12 md:py-8 mx-auto mb-10 md:mb-0 pb-10">
            {/* <PageOneComponent /> */}
            {/* <PageTwoComponent /> */}
            {/* <PageThreeComponent /> */}
            {/* <PageFourComponent /> */}
            {/* <PageFiveComponent /> */}

            {/* ******************************* */}
            {openComponent === 1 ? (
              <PageOneComponent
                setopenComponent={setopenComponent}
                setProduct={setProduct}
              />
            ) : openComponent === 2 ? (
              <PageTwoComponent
                setopenComponent={setopenComponent}
                setPropertyType={setPropertyType}
              />
            ) : openComponent === 3 ? (
              <PageThreeComponent
                setopenComponent={setopenComponent}
                sethomeCost={sethomeCost}
                home_value={home_value}
                _formatCurrency={_formatCurrency}
              />
            ) : openComponent === 4 ? (
              <PageFourComponent
                setopenComponent={setopenComponent}
                setCost={setCost}
                cost={cost}
                _formatCurrency={_formatCurrency}
              />
            ) : (
              <PageFiveComponent
                setName={setName}
                setContact={setContact}
                setEmail={setEmail}
                setinpAddress={setinpAddress}
                handleLandingPageData={handleLandingPageData}
                setPlace={setPlace}
                setCity={setCity}
                setState={setState}
                setzipCode={setzipCode}
              />
            )}
            {/* ******************************* */}
          </div>
          <div className="lg:w-1/2 md:pr-12 md:pb-8 mb-10 md:mb-0 pb-10">
            <h1 className="sm:text-3xl font-raleway mt-[30px] text-2xl font-black my-4 title-font mb-2 text-gray-900">
              We've <span className="text-[#715BA8]">SAVED</span> Canadians over
              8.5<span className="text-[#715BA8]"> MILLION</span> in debt over
              the last 10 years.
            </h1>
            <p className="font-normal font-sans text-xl my-4 font-[#000000]">
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
                  <span className="text-[black] font-raleway font-semibold md:text-xl sm:text-xl">
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
                <span className="flex-grow flex font-raleway flex-col pl-4">
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
                  <span className="text-[black] font-raleway font-semibold md:text-xl sm:text-xl">
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

export default Index
