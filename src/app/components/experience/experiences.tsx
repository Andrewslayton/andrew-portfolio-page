import { experienceEntries } from "../../data/monopolyData";

export function Experience() {
  return (
    <div className="bg-[#D7BDE2] p-4 rounded-lg w-full text-[#4A235A] pb-20">
      <h2 className="text-lg sm:text-xl font-bold text-[#4A235A] mb-4">
        Experience
      </h2>
      <div className="space-y-4">
        {experienceEntries.map((exp) => (
          <div key={exp.id} className="bg-[#D7BDE2] rounded-lg shadow-lg p-4">
            <h2 className="text-xl sm:text-2xl font-bold">{exp.company}</h2>
            <p className="text-md font-semibold">
              {exp.role} / {exp.period}
            </p>
            {exp.description && (
              <p className="text-sm sm:text-base mt-2 whitespace-pre-line">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
