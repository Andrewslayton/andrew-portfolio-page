export type SectionId =
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "whats-new"
  | "blog";

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
};

export type ProjectEntry = {
  id: string;
  name: string;
  url: string;
  description: string;
};

export type EducationCourse = {
  id: string;
  name: string;
  description: string;
};

export type BlogEntry = {
  id: string;
  image: string;
  description: string;
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "compose",
    company: "Compose",
    role: "Software Engineer",
    period: "Jan 2024 - Current",
    description:
      "- Rebuilt automotive detailing internal tool with .NET 8 MVC, improving security, load speeds, and revenue turnout.\n" +
      "- Deployed to multiple EC2 instances to serve multiple locations.\n" +
      "- Created a supply item shop to manage inventory, pricing, and data movement.\n" +
      "- Built and refactored for multiple clients using .NET 8, React, Angular, and Next.js.\n" +
      "- Worked directly with clients to understand their needs and build software to meet those needs.",
  },
  {
    id: "best-buy",
    company: "Best Buy",
    role: "Associate Software Engineer Intern",
    period: "June 2025- Aug 2025",
    description: "Created a middleware service to preemtively error out invalid search requests on the products page to protect from bots. \n"+
    "Contributed to packaging my teams application into an embedded package for use in other teams applications. \n"+
    "Worked in an Agile environment, attending daily standups and bi-weekly sprint planning meetings. \n",
  },
  {
    id: "canadian-lakes",
    company: "Canadian Lakes Organization",
    role: "Groundskeeper",
    period: "May 2022 - Aug 2024",
    description:
      "Individually maintained one of three golf courses in the Canadian Lakes area.",
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    id: "lets-lift",
    name: "Lets Lift!",
    url: "https://github.com/Andrewslayton/LetsLift",
    description:
      "React and Next.js web app allowing users to log in using Google, interact with a Google Map to select an exact location, select workouts, and connect with other users if they have selected the same muscle groups. All information is stored in AWS DynamoDB.",
  },
  {
    id: "phone-checker",
    name: "PhoneChecker",
    url: "https://github.com/Andrewslayton/phoneChecker",
    description:
      "Python executable program built upon real-time video processing to predict when a user is looking down at their phone, using an algorithm constructed through various testing. Includes a connected website to handle API requests and display a leaderboard.",
  },
  {
    id: "workout-social-media",
    name: "Workout Social Media",
    url: "https://github.com/Andrewslayton/GVSU-CIS350-TeamTALK",
    description:
      "Group project built to understand the software development process while working with a team in the Agile workflow. Features a leaderboard, daily challenges, user storage, user data manipulation, Strava integration, and SQL for data storage.",
  },
  {
    id: "who-wants-you",
    name: "Who Wants You",
    url: "https://github.com/Andrewslayton/WhoWantsYou",
    description:
      "Python-Flask dating website with HTML, CSS, and SQLite, enabling users to create profiles and browse through a selection of other profiles to facilitate a match.",
  },
  {
    id: "discord-bots",
    name: "Discord Bots",
    url: "https://github.com/Andrewslayton/DiscBot",
    description:
      "A collection of Discord bots including a games bot, intro and outro bot, and various others, enhancing Discord server interactions.",
  },
  {
    id: "game-mods",
    name: "GameMods",
    url: "https://thunderstore.io/c/repo/p/REPODEMON/EnhancedGodMode/",
    description:
      "Unity engine plugin for the game R.E.P.O that helps new players understand the game by making them invincible and spawning valuables. Hosted a community and over 40,000 downloads.",
  },
];

export const educationCourses: EducationCourse[] = [
  {
    id: "data-structures",
    name: "Data Structures and Analysis",
    description:
      "Overview of data structures and algorithms, taught in Java, focusing on linked lists, stacks, queues, trees, and graphs, as well as analysis of algorithms and their time complexity.",
  },
  {
    id: "discrete-structures",
    name: "Discrete Structures",
    description:
      "Foundations of mathematical logic, set theory, and graph theory. Projects included Python scripts for bipartite graphs, degree sequences, and coloring algorithms such as minimum spanning tree.",
  },
  {
    id: "computer-org",
    name: "Computer Org and Assembly",
    description:
      "Focused on low-level computing concepts. Projects included creating adders, multipliers, and equations using gates and x86 assembly.",
  },
  {
    id: "system-level-programming",
    name: "System Level Programming",
    description:
      "Focused on the C programming language and the Unix operating system. Projects included Gawk, Bash, Sed, and a recreation of the Game of Life in C.",
  },
  {
    id: "data-communications",
    name: "Data Communications",
    description:
      "Focused on the OSI model and the implementation of networking protocols. The course was taught in Java.",
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    description:
      "Covered Android and Apple development using Kotlin and Swift.",
  },
  {
    id: "applied-ml",
    name: "Applied Machine Learning",
    description:
      "Introduction to machine learning and its application, covering implementation of ML algorithms in Python with libraries like TensorFlow and Keras, and different neural network architectures.",
  },
  {
    id: "languages-structure",
    name: "Structure of Programming Languages",
    description:
      "In-depth look at how programming languages evolved and the strengths and weaknesses of each, covering C++, Python, Scala, and more, including implementation of a compiler in C++.",
  },
];

export const blogEntries: BlogEntry[] = [
  {
    id: "arizona",
    image: "/arizona1.png",
    description: "Arizona, March 2025.",
  },
  {
    id: "los-angeles",
    image: "/cali1.png",
    description: "Los Angeles, California February 2025.",
  },
  {
    id: "camping",
    image: "/camping.jpg",
    description: "Traverse City, Michigan August 2024.",
  },
];

export type BoardSquare = {
  id: string;
  section: SectionId | "meta";
  title: string;
  subtitle?: string;
  description?: string;
  kind?: "content" | "start" | "spacer" | "end";
};

export const boardSquares: BoardSquare[] = [
  {
    id: "start",
    section: "meta",
    kind: "start",
    title: "START",
    description:
      "Use the arrow keys to navigate through my portfolio!",
  },

  ...experienceEntries.map((exp) => ({
    id: `experience-${exp.id}`,
    section: "experience" as const,
    kind: "content" as const,
    title: exp.company,
    subtitle: `${exp.role} • ${exp.period}`,
    description: exp.description,
  })),

  {
    id: "spacer-experience-projects",
    section: "meta",
    kind: "spacer",
    title: "",
  },

  ...projectEntries.map((project) => ({
    id: `projects-${project.id}`,
    section: "projects" as const,
    kind: "content" as const,
    title: project.name,
    description: project.description,
  })),

  {
    id: "spacer-projects-education",
    section: "meta",
    kind: "spacer",
    title: "",
  },

  ...educationCourses.map((course) => ({
    id: `education-${course.id}`,
    section: "education" as const,
    kind: "content" as const,
    title: course.name,
    description: course.description,
  })),

  {
    id: "spacer-education-blog",
    section: "meta",
    kind: "spacer",
    title: "",
  },

  ...blogEntries.map((blog) => ({
    id: `blog-${blog.id}`,
    section: "blog" as const,
    kind: "content" as const,
    title: "Travel",
    description: blog.description,
  })),

  {
    id: "whats-new-1",
    section: "whats-new",
    kind: "content",
    title: "Loading GitHub Activity...",
    description:
      "",
  },
  {
    id: "whats-new-2",
    section: "whats-new",
    kind: "content",
    title: "Loading GitHub Activity...",
    description:
      "",
  },
  {
    id: "whats-new-3",
    section: "whats-new",
    kind: "content",
    title: "Loading GitHub Activity...",
    description: "",
  },
  {
    id: "whats-new-4",
    section: "whats-new",
    kind: "content",
    title: "Loading GitHub Activity...",
    description: "",
  },

  {
    id: "end",
    section: "meta",
    kind: "end",
    title: "END",
    description: "Loop back to START and keep exploring.",
  },
];
