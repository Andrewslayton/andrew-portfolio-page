export function Experience() {
  return (
    <div className="bg-[#D7BDE2] p-4 rounded-lg overflow-auto h-full w-4xl text-[#4A235A] pb-20 id=experience">
      <h2 className="text-lg sm:text-xl font-bold text-[#4A235A]e mb-4">
        Experience
      </h2>
      <div className="space-y-4">
        <div className="bg-[#D7BDE2] rounded-lg shadow-lg p-4">
          <h2 className="text-xl sm:text-2xl font-bold">Compose</h2>
          <p className="text-md font-semibold">
            Software Developer / Jan 2024 - Current
          </p>
          <p className="text-sm sm:text-base mt-2">
            <br />
            -Rebuilt automative detailing internal tool with .Net 8 MVC
            <br />
            Improved security, load speeds, and revenue turnout.
            <br />
            Deployed to multiple ec2 instances to suit multiple locations.
            <br />
            -Created a supply item shop to manage inventory, pricing, and moving
            data.
            <br />
            -Built and refactored for multiple clients using .Net 8, React,
            Angular, and Next.js.
            <br />
            -Worked with clients to understand their needs and build software to
            meet those needs.
          </p>
        </div>
        <div className="bg-[#D7BDE2] text-text-[#4A235A] rounded-lg shadow-lg p-4">
          <h2 className="text-xl sm:text-2xl font-bold">Best Buy</h2>
          <p className="text-md font-semibold">
            Product Flow Specialist / Jan 2024 - Current
          </p>
          <p className="text-sm sm:text-base mt-2"></p>
        </div>
        <div className="bg-[#D7BDE2] rounded-lg shadow-lg p-4">
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
