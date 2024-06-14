export function Education() {
  const courses = [
    {
      name: "Data Structures and Analysis",
      description: "Overview of data structures and algorithms. The course was taught in Java and focused on the implementation of data structures such as linked lists, stacks, queues, trees, and graphs. The course also covered the analysis of algorithms and their time complexity.",
    },
    {
      name: "Discrete Structures",
      description:
        "Discrete Structures focused on the foundations of mathematical logic, set theory, and graph theory. Within 325 projects included creating python scripts for multiple bipartite, degree sequence, and coloring algorithms such as minimum spanning tree.",
    },
    {
      name: "Computer Org and Assembly",
      description:
        "Computer Org And Assembly focused on the lowest aspects of computing. Projects included creating adders, multiplies, and equations using gates and assembly. The course was taught in x86 Assembly.",
    },
    {
      name: "System Level Programming",
      description:
        "System Level Programming focused on the C programming language and the Unix operating system. Projects included Gawk, Bash, Sed, and C programming such as a recreation of the game of life in C.",
    },
    {
      name: "Data Communications",
      description:
        "Data Communications focused on the OSI model and the implementation of networking protocols. This course was taught in Java",
    },
    {
      name: "Mobile Development",
      description:
        "Mobile Development covered the process of Android and Apple mobile development using Kotlin and Swift.",
    },
    {
      name: "Applied Machine Learning",
      description:
        "Introduction to machine learning and its application. The course covered the implementation of machine learning algorithms in Python and the use of libraries such as TensorFlow and Keras. The course also covered different neural network architectures and their applications.",
    },
    {
      name: "Structure of Programming Languages",
      description: "In depth look at the progression of programming languages and the strengths and weaknesses of each. This class covered C++, Python, Scala, and many more langauges in less depth. The course also covered the implementation of a compiler in C++.",
    },
  ];

  return (
    <div className="bg-[#1f8278] p-4 rounded-lg overflow-auto h-full text-white id=education ">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4">Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-black rounded-lg shadow-lg p-4">
            <h2 className="text-base sm:text-lg md:text-xl font-bold overflow-auto">
              {course.name}
            </h2>
            <p className="text-sm mt-2">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
