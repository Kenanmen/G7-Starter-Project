import Footer from "../../FooterAdmin/page";
import NavBar from "../../NavAdmin/page";

const Admin_Cycles_Create = () => {
    return (
      <div className="min-h-[1200px] w-full bg-gray-100 flex justify-center">

        <NavBar/>
        <div className="w-[1280px] max-w-[1280px] flex flex-col pt-[39px] pb-[56px] gap-10">
          {/* Header */}
          <div className="flex flex-col gap-1 px-8">
            <h2 className="text-[28px] font-semibold text-[#111827] leading-[38px]">
              Create new cycle
            </h2>
            <p className="text-sm text-[#6B7280] leading-[20px]">
              Use this form to create new cycle and assign periods
            </p>
          </div>
  
          {/* Form */}
          <div className="w-full max-w-[1216px] bg-white rounded-lg p-6 flex flex-col gap-6 mx-auto">
            <form className="flex flex-col gap-6">
              {/* Row 1: Cycle Name & Country */}
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="Cycle Name"
                  className="w-full max-w-[572px] h-11 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="w-full max-w-[572px] h-11 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
  
              {/* Row 2: Start Date & End Date */}
              <div className="flex gap-6">
                <input
                  type="date"
                  className="w-full max-w-[572px] h-11 px-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="date"
                  className="w-full max-w-[572px] h-11 px-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </form>
  
            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
                type="button"
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 bg-[#4F46E5] text-white rounded-md hover:bg-[#4338ca]"
                type="submit"
              >
                Save Cycle
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  };

  
  export default Admin_Cycles_Create;
  