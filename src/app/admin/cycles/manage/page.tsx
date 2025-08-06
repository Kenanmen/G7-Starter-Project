
import CycleCard from "../../cycles/cards/page"
import Footer from "../../FooterAdmin/page"
import NavBar from "../../NavAdmin/page"
const Admin_Cycles = () => {
  return (
    //    container
<div className="bg-gray-100 min-h-[1200px] w-full flex flex-col ">
    <NavBar/>
        <div className="flex flex-col w-full min-h-screen pt-10 gap-8 opacity-100">
          <div className="w-full max-w-[1280px] mx-auto px-8 flex flex-col gap-8">
            {/* header */}
            <div className="flex flex-row w-full h-14 items-center justify-between z-50">
              a<h2 className="text-xl font-semibold opacity-100">
                Application Cycles
              </h2>
              <button className="text-white bg-[#4F46E5] px-4 py-2 h-10 w-[169px] text-sm font-medium rounded-md opacity-100">
                Create New Cycle
              </button>
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <CycleCard
                title="G7 November Intake"
                description="The seventh generation of eight, November intake"
                country="Ethiopia"
                status="Active"
              />
              <CycleCard
                title="G6 May Intake"
                description="The sixth generation of its experience, May intake"
                country="Kenya"
                status="Closed"
              />
              <CycleCard
                title="G5 November Intake"
                description="The fifth generation of November intake"
                country="Ghana"
                status="Closed"
              />
              <CycleCard
                title="G4 May Intake"
                description="The fourth generation of A2SV, May intake"
                country="Nigeria"
                status="Closed"
              />
            </div>
            {/* pagination */}
            <div className="flex justify-between items-center w-full mt-8">
              <p className="text-sm text-gray-600"> Showing 1 to 4 of 12 results</p>
              {/* Pagination Buttons */}
              <div className="w-[197px] h-[38px] flex items-center justify-between ">
                <button className="w-[42px] h-[38px] bg-white border border-gray-300 rounded-sm flex items-center justify-center text-sm">
                  &lt;
                </button>
                <button className="w-[42px] h-[38px] bg-white border border-gray-300 rounded-sm flex items-center justify-center text-sm">
                  1
                </button>
                <button className="w-[42px] h-[38px] bg-white border border-gray-300 rounded-sm flex items-center justify-center text-sm">
                  2
                </button>
                <button className="w-[42px] h-[38px] bg-white border border-gray-300 rounded-sm flex items-center justify-center text-sm">
                  3
                </button>
                <button className="w-[42px] h-[38px] bg-white border border-gray-300 rounded-sm flex items-center justify-center text-sm">
                  &gt;
                </button>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer/>
        </div>
    </div>
        )
}

export default Admin_Cycles
