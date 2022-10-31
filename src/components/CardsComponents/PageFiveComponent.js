import React, { useState } from 'react'
// Liberaries**********************
import axios from 'axios'
import PhoneInput from 'react-phone-number-input/input'
import Swal from 'sweetalert2'
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   geocodeByPlaceId,
//   getLatLng,
//   searchOptions,
// } from 'react-places-autocomplete'

import Autocomplete from 'react-google-autocomplete'

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
  // Form Validation Error
  // errors
  const [name, setNameE] = useState('')
  const [nameError, setNameError] = useState('')

  const [phone, setPhoneE] = useState('')
  const [PhoneError, setPhoneError] = useState('')

  const [email, setEmailE] = useState('')
  const [emailError, setEmailError] = useState('')
  const [validEmail, setValidEmail] = useState('')

  const [address, setAddress] = useState()
  const [coordinate, setCoordinate] = useState({})

  const [addressE, setAddressE] = useState('')
  const [addressError, setAddressError] = useState('')

  // -------------------------------
  // -------------------------------
  // phone validation
  const phoneNumberFunc = (n) => {
    // console.log(n)
    // phoneFormat(n)
    setContact(n)
    setPhoneE(n)
    setPhoneError('')
  }

  // -----------------------Validate or not----------------------------

  const checkPhoneIsCanadianValidOrNot = async () => {
    const formData = new FormData()
    formData.append('contact_no', phone)
    try {
      const { data } = await axios({
        method: 'post',
        url: 'https://nu2morrow.com/crm/apis/SecUser/contactvalidator',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      // console.log(formData)
      // console.log(data)
      if (data?.status !== 200) {
        return alert('Invalid number')
      }
      return data?.status
      // console.log(data?.data)
    } catch (err) {
      const invalidError = err.message
      // console.log(err.message)
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Number is not valid!',
        // footer: '<a href="">Why do I have this issue?</a>',
      })
      // setValidPhone(invalidError)
    }
  }

  // ************auto place API**********
  const handleSelect = async (value) => {
    console.log(value)
    // const results = await geocodeByAddress(value)
    // const ll = await getLatLng(results[0])

    // setCoordinate(ll)

    let address_country
    let postal_code
    let address_state
    let address_city
    let place

    value?.address_components?.forEach((item) => {
      const countryFound = item.types.find((e) => e === 'country')
      const postalFound = item.types.find((e) => e === 'postal_code')
      const placeFound = item.types.find((e) => e === 'route')
      const stateFound = item.types.find(
        (e) => e === 'administrative_area_level_1',
      )
      const cityFound = item.types.find((e) => e === 'locality')

      if (countryFound) {
        address_country = item.short_name
      }
      if (postalFound) {
        postal_code = item.long_name
      }
      if (stateFound) {
        address_state = item.short_name
      }
      if (cityFound) {
        address_city = item.long_name
      }
      if (placeFound) {
        place = item.long_name
      }
    })
    // console.log("address_country :", address_country ?? "")
    // console.log("postal_code :", postal_code ?? "")
    // console.log("address_state :", address_state ?? "")
    // console.log("address_city :", address_city ?? "")
    // console.log("place :", place ?? "")
    setState(address_state)
    setzipCode(postal_code)
    setCity(address_city)
    setPlace(`${place}, ${address_city}, ${postal_code}, ${address_state}`)
  }
  // ************auto place API**********

  // *******************onclick**************
  const onClickHandle = async () => {
    if (!phone) {
      return setPhoneError('Phone is required')
    }

    const resp = await checkPhoneIsCanadianValidOrNot()
    console.log(resp)
    if (!name) {
      return setNameError('Name is required')
    }

    //  ***********************

    if (phone.length < 12) {
      return setPhoneError('Please enter valid phone number')
    }
    // if (phone.length[0] === 0 || 1) {
    //   return setPhoneError("Please enter valid phone number")
    // }

    // if (!phone) {
    //   return setPhoneError("Contact number is required")
    // }

    // console.log(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    if (!email) {
      return setEmailError('Email is required')
    } else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
    ) {
      return setValidEmail('Enter the valid email')
    }
    if (!addressE) {
      return setAddressError('Address is required')
    }
    // number validator*******
    // checkPhoneIsCanadianValidOrNot();
    //  phonenumber(phone);

    // validPhone="true" ? setPhoneError(validPhone) : setPhoneError("");  *****************

    if (resp === 200) {
      handleLandingPageData()
      setAddress('')
      setAddressE('')
      setEmailE('')
      setPhoneE('')
      setNameE('')
    }
  }
  // address field check empty or not
  const chkAddressFieldEmpyOrField = (ad) => {
    console.log(ad)
    setAddressE(ad)
    setAddress(ad)
    setAddressError('')
  }

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
          {/* <Form /> */}
          <form>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => {
                  setNameE(e.target.value)
                  setName(e.target.value)
                  setNameError('')
                }}
                className="bg-gray-50 border text-[12px] text-thin sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
              />
              <div className="text-red-700 text-left sm:w-[65%] mx-auto text-[12px] font-thin">
                {nameError}
              </div>
            </div>
            <div className="mb-5">
              <PhoneInput
                className="bg-gray-50 border text-[12px] text-thin sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
                placeholder="Your Phone"
                maxlength="14"
                country="US"
                value={phone}
                onChange={phoneNumberFunc}
              />
              <div className="text-red-700 text-left sm:w-[65%] mx-auto text-[12px] font-thin">
                {PhoneError}
              </div>
            </div>
            <div className="mb-5">
              <input
                type="email"
                value={email}
                placeholder="our Email (to send the report)"
                required
                onChange={(e) => {
                  setEmailE(e.target.value)
                  setEmail(e.target.value)
                  setEmailError('')
                  setValidEmail('')
                }}
                className="bg-gray-50 border text-[12px] text-thin sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
              />
              <div className="text-red-700 text-left sm:w-[65%] mx-auto text-[12px] font-thin">
                {emailError}
              </div>
              <div className="text-red-700 text-left sm:w-[65%] mx-auto text-[12px] font-thin">
                {validEmail}
              </div>
            </div>
            <div className="mb-5">
              <Autocomplete
                apiKey="AIzaSyDKhj1caiJVMeNgBAqbOjV97q0oMyAuRiQ"
                // style={{ width: '90%' }}
                className="bg-gray-50 border text-[12px] text-thin sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
                onPlaceSelected={(place) => {
                  handleSelect(place)
                  setAddress(place?.formatted_address)
                }}
                placeholder="Your address(to make sure the home value is accurate)"
                options={{
                  types: ['geocode', 'establishment'],
                  componentRestrictions: { country: 'ca' },
                }}
                // defaultValue={address}
                onChange={chkAddressFieldEmpyOrField}
                onSelect={handleSelect}
              />
              {/* <PlacesAutocomplete
                className="bg-gray-50 border text-[12px] text-thin sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]"
                required
                value={address}
                onChange={chkAddressFieldEmpyOrField}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading,
                }) => (
                  <div>
                    <input
                      onChange={(address) => setinpAddress(address)}
                      {...getInputProps({
                        className:
                          'bg-gray-50 border text-thin text-[12px] sm:w-[70%] m-auto drop-shadow-sm px-[50px] border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#715BA8] focus:border-[#715BA8] block w-full p-2.5  dark:border-[#EDF3F3] dark:placeholder-gray-300 dark:text-black dark:focus:ring-[#715BA8] dark:focus:border-[#715BA8]',
                        placeholder:
                          'Your Address (to make sure the home value is accurate)',
                      })}
                    />
                    <div
                      className="autocomplete-dropdown-container w-[70%] mx-auto"
                      style={{ border: '1px solid #fafafa' }}
                    >
                      {loading && (
                        <div className="py-[5px] text-[11px] text-thin px-[10px] mt=[5px] border-solid text-[24px] border-[2px] border-[#fafafa]">
                          Loading...
                        </div>
                      )}
                      {suggestions?.map((suggestion) => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item'
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? {
                              backgroundColor: '#FFFFFF',
                              cursor: 'pointer',
                              padding: '5px 12px',
                              marginTop: '5px',
                              // border: "2px solid #fafafa",
                            }
                          : {
                              backgroundColor: '#FFFFFF',
                              cursor: 'pointer',
                              padding: '5px 12px',
                              marginTop: '5px',
                              // border: "2px solid #fafafa",
                            }
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className: 'text-[12px] font-thin text-left',
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete> */}
              <div className="text-red-700 text-left sm:w-[65%] mx-auto text-[12px] font-thin">
                {addressError}
              </div>
            </div>
          </form>
          <div className="w-[90%] mx-auto">
            <div className="w-[100%] text-center m-auto">
              <button
                className="bg-[#715BA8] rounded-full md:text-xl md:font-bold text-[white] sm:py-[8px] sm:px-[40px] py-[5px] px-[35px] my-[0px] hover:bg-[#715BA8]-600 active:bg-[#715BA8]-700 focus:outline-none focus:ring focus:ring-violet-300"
                onClick={() => onClickHandle()}
              >
                Please send my free reports
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
