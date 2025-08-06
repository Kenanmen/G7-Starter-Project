
const Analytics_Dashboard = () => {
  return (
    <div className="min-h-[1200px] w-full bg-gray-100 flex justify-center overflow-x-hidden">
      <div className="w-full max-w-[1920px] px-8 lg:px-40 pt-10 pb-10">
        {/* Heading */}
        <div className="max-w-[1280px] w-full px-8 mb-8">
          {/* Title */}
          <div className="w-full mb-1">
            <h1 className="text-2xl font-semibold text-gray-800">Analytics</h1>
          </div>
          {/* Description */}
          <p className="text-sm text-gray-600">
            Insights and metrics about the applicants.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-[1280px] w-full px-8 space-y-8">
          {/* Top Charts */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Application Funnel */}
            <div className="bg-white rounded-md p-6 w-full lg:w-1/2 shadow">
              <h2 className="text-lg font-semibold mb-1">Application Funnel</h2>
              <p className="text-sm text-gray-600 mb-3">
                This chart visualizes the applicant's journey from submission to acceptance.
              </p>
              <img
                src="/App_funnel.svg"
                alt="Application Funnel Chart"
                className="w-full h-auto pt-3"
              />
            </div>

            {/* University Distribution */}
            <div className="bg-white rounded-md p-6 w-full lg:w-1/2 shadow">
              <h2 className="text-lg font-semibold mb-1">University Distribution</h2>
              <p className="text-sm text-gray-600 mb-3">
                This chart visualizes the distribution of applicants across different universities.
              </p>
              <img
                src="/university_dist.svg"
                alt="University Distribution Chart"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Geographical Distribution */}
          <div className="bg-white rounded-md p-6 shadow">
            <h2 className="text-lg font-semibold mb-1">Geographical Distribution</h2>
            <p className="text-sm text-gray-600 mb-3">
              Shows the number of applicants from each country.
            </p>
            <img
              src="/geo_dist.svg"
              alt="Geographical Distribution Chart"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics_Dashboard;
