

import { FaUserPlus, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../FooterAdmin/page';
import NavBar from '../NavAdmin/page';

const Admin_Dashboard = () => {
  return (
    <div className="min-h-[1200px] w-full bg-gray-100 flex justify-center overflow-x-hidden">
        <NavBar/>
      <div className="w-[1920px] flex flex-col gap-8 pt-[39px] pb-[357.5px]">
        {/* heading */}
        <div className="w-[1216px] h-[38px] mx-auto">
          <h2 className="text-[30px] font-bold leading-[37.5px]">Admin command Center</h2>
        </div>

        {/* main */}
        <div className="w-[1280px] max-w-[1280px] flex flex-col gap-8 px-8 mx-auto">
          {/* reports */}
          <div className="flex gap-6">
            <div className="w-[389px] h-[100px] rounded-lg p-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <p>Total users</p>
              <p className="text-2xl">125</p>
            </div>
            <div className="w-[389px] h-[100px] rounded-lg p-5 bg-gradient-to-r from-green-500 to-teal-600 text-white">
              <p>Total Applicants (G7)</p>
              <p className="text-2xl">1204</p>
            </div>
            <div className="w-[389px] h-[100px] rounded-lg p-5 bg-gradient-to-r from-yellow-400 to-orange-600 text-white">
              <p>Active cycles</p>
              <p className="text-2xl">1</p>
            </div>
          </div>

          {/* admin management */}
          <div className="flex gap-6">
            {/* Manage Users */}
            <div className="w-[384px] h-[344px] bg-white rounded-lg p-6 flex flex-col gap-2">
              <div className="text-lg font-semibold">Manage Users</div>
              <div className="text-sm text-gray-700">Create, edit, and manage user accounts and roles.</div>
              <div className="pt-2 text-indigo-600">Go to users →</div>
            </div>

            {/* Manage Cycles */}
            <div className="w-[384px] h-[344px] bg-white rounded-lg p-6 flex flex-col gap-2">
              <div className="text-lg font-semibold">Manage Cycles</div>
              <div className="text-sm text-gray-700">Create and manage application cycles.</div>
              <div className="pt-2 text-indigo-600">Go to cycles →</div>
            </div>

            {/* Recent Admin Activity */}
            <div className="w-[384px] h-[344px] bg-white rounded-lg p-6 flex flex-col gap-4">
              <div className="text-lg font-semibold">Recent Admin Activity</div>
              {/* Activity 1 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUserPlus className="text-green-500 w-[15px] h-[15px]" />
                </div>
                <div className="flex flex-col text-sm">
                  <p>New user "Jane R." created.</p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
              </div>
              {/* Activity 2 */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaCalendarAlt className="text-blue-500 w-[15px] h-[15px]" />
                </div>
                <div className="flex flex-col text-sm">
                  <p>Cycle "G7 November" set to active.</p>
                  <p className="text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* View analytics */}
          <div className="w-[765px] h-[169px] bg-white rounded-lg p-6 flex flex-col gap-2">
            <div className="text-lg font-semibold">View Analytics</div>
            <div className="text-sm text-gray-700">Explore application data and platform insights.</div>
            <div className="pt-2 text-indigo-600">Go to analytics →</div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Admin_Dashboard;
