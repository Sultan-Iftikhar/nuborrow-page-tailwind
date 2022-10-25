import React from "react";
import girl from "../../images/png/mainimage.png";
import "./style.css";

function index() {
  return (
    <>
      <section className="bg-white w-[100%]">
        <div className="container md:w-[90%] mx-auto flex flex-wrap px-5 py-5">
          <div className="md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10">
            <h1 className="sm:text-3xl text-2xl font-black font-raleway my-4 title-font mb-2 text-gray-900">
              Clients <span className="text-[#715BA8]">SAVE</span> over{" "}
              <span className="text-[#715BA8]">$15,000</span> a year with our
              proven strategies
            </h1>
          </div>
          <div className="md:w-1/2 md:pr-12 md:pb-8 mb-10 md:mb-0 pb-10">
            <img src={girl} className="mx-auto sm:h-60 sm:w-60 " alt="img" />
          </div>
        </div>

        {/* ******************************************************** */}
        <body class="flex items-center justify-center">
          <div className="container -mt-20  w-[90%] mx-auto">
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <thead className="text-white">
                <tr className="bg-[#715BA8] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-5 text-left text-[#715BA8]">Data</th>
                  <th className="p-5 font-sans text-left">Current Financial Situation</th>
                  <th className="p-5 font-sans text-left">
                    Your new financial situation
                  </th>
                </tr>
                <tr className="bg-[#715BA8] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-5 text-left text-[#715BA8]">Data</th>
                  <th className="p-5 font-sans text-left">Current Financial Situation</th>
                  <th className="p-5 font-sans text-left">
                    Your new financial situation
                  </th>
                </tr>
                <tr className="bg-[#715BA8] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-5 text-left text-[#715BA8]">Data</th>
                  <th className="p-5 font-sans text-left">Current Financial Situation</th>
                  <th className="p-5 font-sans text-left">
                    Your new financial situation
                  </th>
                </tr>
                <tr className="bg-[#715BA8] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-5 text-left text-[#715BA8]">Data</th>
                  <th className="p-5 font-sans text-left">Current Financial Situation</th>
                  <th className="p-5 font-sans text-left">
                    Your new financial situation
                  </th>
                </tr>
                <tr className="bg-[#715BA8] flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-5 text-left text-[#715BA8]">Data</th>
                  <th className="p-5 font-sans text-left">Current Financial Situation</th>
                  <th className="p-5 font-sans text-left">
                    Your new financial situation
                  </th>
                </tr>
              </thead>
              <tbody className="flex-1 sm:flex-none">
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="p-5 font-sans">1st Mortgage Payment</td>
                  <td className="p-5 font-sans truncate">$2,000.00 a month</td>
                  <td className="p-5 font-sans text-black hover:text-black hover:font-medium cursor-pointer">
                    $2,000.00 a month
                  </td>
                </tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="p-5 font-sans">New Loan Payment</td>
                  <td className="p-5 font-sans truncate">$0.00 a month</td>
                  <td className="p-5 font-sans text-black hover:text-black hover:font-medium cursor-pointer">
                    $415.00 a month
                  </td>
                </tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="p-5 font-sans">Credit Card Debit</td>
                  <td className="p-5 font-sans truncate">$1,250.00 a month</td>
                  <td className="p-5 font-sans text-black hover:text-black hover:font-medium cursor-pointer">
                    No more credit card debt payments
                  </td>
                </tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="p-5 font-sans">Automobile Payments</td>
                  <td className="p-5 font-sans truncate">$750.00 a month</td>
                  <td className="p-5 font-sans text-black hover:text-black hover:font-medium cursor-pointer">
                    No more automobile payments
                  </td>
                </tr>
                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                  <td className="p-5 font-sans">Total Payments</td>
                  <td className="p-5 font-sans truncate">$3,975.00 a month</td>
                  <td className="p-5 font-sans text-black hover:text-black hover:font-medium cursor-pointer">
                    $2,415.00 a month
                  </td>
                </tr>
              </tbody>
            </table>

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
  );
}

export default index;
