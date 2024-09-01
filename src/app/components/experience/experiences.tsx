export function Experience() {
  return (
    <div className="bg-[#1f8278] p-4 rounded-lg overflow-auto h-full w-4xl text-white pb-20 id=experience">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4">
        Experience
      </h2>
      <div className="space-y-4">
        <div className="bg-black rounded-lg shadow-lg p-4">
          <h2 className="text-xl sm:text-2xl font-bold">Compose</h2>
          <p className="text-md font-semibold">
            Software Developer / Jan 2024 - Current
          </p>
          <p className="text-sm sm:text-base mt-2">
            -Developed web applications for clients using React, NextJs, and
            Angular.
            <br />
            -Created a supply item shop to manage inventory and pricing.
            <br />
            -Worked in .NET to create efficient endpoints for our clients
            applications.
          </p>
        </div>
        <div className="bg-black rounded-lg shadow-lg p-4">
          <h2 className="text-xl sm:text-2xl font-bold">Best Buy</h2>
          <p className="text-md font-semibold">
            Product Flow Specialist / Jan 2024 - Current
          </p>
          <p className="text-sm sm:text-base mt-2"></p>
        </div>
        <div className="bg-black rounded-lg shadow-lg p-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Canadian Lakes Organization
          </h2>
          <p className="text-md font-semibold">
            Groundskeeper / May 2022 - Aug 2024
          </p>
          <p className="text-sm sm:text-base mt-2">
            Individually maintained one of 3 golf courses in the Canadian Lakes
            area.
          </p>
        </div>
      </div>
    </div>
  );
}
