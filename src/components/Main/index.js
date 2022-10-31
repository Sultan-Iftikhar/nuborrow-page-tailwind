import React from 'react'
import girl from '../../images/png/mainimage.png'
// import "./style.css";
import ResTable from './ResTable'
import { Strings } from '../../Utils/String'

function index() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="md:w-[90%] mx-auto flex flex-wrap px-5 py-5">
          <div className="md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10">
            <h1 className="sm:text-3xl text-2xl font-black font-raleway my-4 title-font mb-2 text-gray-900">
              Clients <span className="text-[#715BA8]">SAVE</span> over{' '}
              <span className="text-[#715BA8]">$15,000</span> a year with our
              proven strategies
            </h1>
          </div>
          <div className="md:w-1/2 md:pr-12 md:pb-8 mb-10 md:mb-0 pb-10">
            <img src={girl} className="mx-auto sm:h-60 sm:w-60 " alt="img" />
          </div>
        </div>

        {/* ***************************Table***************************** */}
        <body className="flex items-center justify-center">
          <div className="sm:-mt-20 -mt-[148px] w-[90%]">
            <div className="w-full mb-12 px-4 mx-auto rounded-t-2xl">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded-b-[40px] w-full hidden lg:block mb-6 shadow-lg rounded-t-2xl">
                <div className="block w-full rounded-t-[40px] rounded-b-[40px] overflow-x-auto">
                  <table className="items-center bg-transparent  rounded-t-2xl w-full border-collapse ">
                    <thead className="rounded-t-2xl">
                      <tr className="bg-[#715BA8] rounded-t-2xl">
                        <th className="px-full py-[24px] text-white font-bold text-xl align-middle border border-solid border-blueGray-100 font-sans border-l-0 border-r-0 whitespace-nowrap w-1/3 text-left" />
                        <th className="px-6  text-white py-[24px] font-bold text-xl align-middle border border-solid border-blueGray-100 font-sans border-l-0 border-r-0 whitespace-nowrap w-1/3 text-left">
                          Current Financial Situation
                        </th>
                        <th className="px-6 py-[24px] text-white font-bold text-xl align-middle border border-solid border-blueGray-100  font-sans border-l-0 border-r-0 whitespace-nowrap w-1/3 text-left">
                          Your new financial situation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#FAF8FF]">
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          1st Mortgage Payment
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-center border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          $2,000.00 a month
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                          $2,000.00 a month
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          New Loan Payment
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          $0.00 a month
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          <i className="fas fa-arrow-down text-orange-500 mr-4" />
                          $415.00 a month
                        </td>
                      </tr>
                      <tr className="bg-[#FAF8FF]">
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          Credit Card Debt
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          $1,250.00 a month
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          <i className="fas fa-arrow-down text-orange-500 mr-4" />
                          No more credit card debt payments
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          Automobile Payments
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          $750.00 a month
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                          No more automobile payments
                        </td>
                      </tr>
                      <tr className="bg-[#FAF8FF]">
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          Total Payments
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          $3,975.00 a month
                        </td>
                        <td className="border-t-0 text-[18px] py-[24px] font-bold px-6 align-middle border-l-0 border-r-0 font-sans whitespace-nowrap p-4">
                          <i className="fas fa-arrow-down text-red-500 mr-4" />
                          $2,415.00 a month
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <footer class="relative pt-8 pb-6 mt-16">
              <div class="container mx-auto px-4">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                  <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div class="text-sm text-blueGray-500 font-semibold py-1"></div>
                  </div>
                </div>
              </div>
            </footer> */}
            {/* *********************************Small devices table********************************** */}
            {/* Row 1 */}
            <div className="bg-white shadow-lg w-[100%] rounded-2xl shadow-cyan-500/400">
              <ResTable header={''} content={'1st Mortgage Payment'} />
              <ResTable
                header={'Current Financial Situation'}
                content={'$2,000.00 a month'}
              />
              <ResTable
                header={'Your new financial situation'}
                content={'$2,000.00 a month'}
              />
            </div>
            <div className="w-[20%] h-[5px] rounded-xl bg-[#715BA8] mx-auto block sm:hidden my-[10px]"></div>
            {/* Row 1 */}
            {/* Row 2 */}
            <div className="bg-white shadow-lg w-[100%] rounded-2xl shadow-cyan-500/400">
              <ResTable header={''} content={'New Loan Payment'} />
              <ResTable
                header={'Current Financial Situation'}
                content={'$0.00 a month'}
              />
              <ResTable
                header={'Your new financial situation'}
                content={'$415.00 a month'}
              />
            </div>
            <div className="w-[20%] h-[5px] rounded-xl bg-[#715BA8] mx-auto block sm:hidden my-[10px]"></div>
            {/* Row 2 */}
            {/* Row 3 */}
            <div className="bg-white shadow-lg w-[100%] rounded-2xl shadow-cyan-500/400">
              <ResTable header={''} content={'Credit Card Debt'} />
              <ResTable
                header={'Current Financial Situation'}
                content={'$1,250.00 a month'}
              />
              <ResTable
                header={'Your new financial situation'}
                content={'No more credit card debt payments'}
              />
            </div>
            <div className="w-[20%] h-[5px] rounded-xl bg-[#715BA8] mx-auto block sm:hidden my-[10px]"></div>
            {/* Row 3 */}
            {/* Row 4 */}
            <div className="bg-white shadow-lg w-[100%] rounded-2xl shadow-cyan-500/400">
              <ResTable header={''} content={'Automobile Payments'} />
              <ResTable
                header={'Current Financial Situation'}
                content={'$750.00 a month'}
              />
              <ResTable
                header={'Your new financial situation'}
                content={'No more automobile payments'}
              />
            </div>
            <div className="w-[20%] h-[5px] rounded-xl bg-[#715BA8] mx-auto block sm:hidden my-[10px]"></div>
            {/* Row 4 */}
            {/* Row 5 */}
            <div className="bg-white shadow-lg w-[100%] rounded-2xl shadow-cyan-500/400">
              <ResTable header={''} content={'Total Payments'} />
              <ResTable
                header={'Current Financial Situation'}
                content={'$3,975.00 a month'}
              />
              <ResTable
                header={'Your new financial situation'}
                content={'$2,415.00 month'}
              />
            </div>
            {/* Row 5 */}
            {/* ******************************************************************* */}

            <div className="bg-[#715BA8] mt-[20px] border-[#715BA8] rounded-2xl">
              <div className="flex flex-col items-center p-5 justify-center">
                <h1 className="text-[16px] md:text-[28px] font-raleway sm:text-[24px] text-white py-[5px] font-bold">
                  Monthly Savings with Nuborrow $1,560.00
                </h1>
                <h1 className="text-[16px] font-raleway md:text-[28px] sm:text-[24px] text-white py-[5px] font-bold">
                  Yearly Savings with Nuborrow $18,720.00
                </h1>
              </div>
            </div>
          </div>
        </body>
      </section>
    </>
  )
}

export default index
