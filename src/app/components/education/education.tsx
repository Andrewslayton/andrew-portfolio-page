import { educationCourses } from "../../data/monopolyData";

export function Education() {
  return (
    <div className="bg-[#D7BDE2] p-4 rounded-lg w-full text-[#4A235A]">
      <h2 className="text-lg sm:text-xl font-bold text-[#4A235A] mb-4">
        Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {educationCourses.map((course) => (
          <div key={course.id} className="bg-[#D7BDE2] rounded-lg shadow-lg p-4">
            <h2 className="text-base sm:text-lg md:text-xl font-bold">
              {course.name}
            </h2>
            <p className="text-sm mt-2 text-[#4A235A]">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
