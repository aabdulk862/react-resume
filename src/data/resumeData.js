import IMG1 from "../img/ERS.png";
import IMG2 from "../img/adams-corner.png";
import IMG3 from "../img/clothing.png";
import IMG4 from "../img/kanban.png";
import IMG5 from "../img/paint-clone.png";
import IMG6 from "../img/countdown.png";

const resumeData = {
  name: "Adam Abdulkadir",
  linkedinId: "https://www.linkedin.com/in/adam-abdulkadir/",
  address: "Gainesvile, Virginia",
  phone: "703-364-8616",
  email: "adama1862@outlook.com",
  github: "https://github.com/aabdulk862",
  role: "Software Engineer",
  roleDescription:
    "Results-driven Software Engineer with a proven track record of designing, developing, and deploying scalable web applications and cloud-based solutions. Skilled in full-stack development using Java, React, Spring Boot, and AWS, with extensive experience in creating dynamic and secure systems for both corporate and nonprofit organizations. Adept at managing complex workflows, including user authentication, data visualization, and application performance optimization. Known for spearheading innovative projects, such as building enterprise-grade reimbursement systems and modernizing legacy applications, while maintaining a strong focus on collaboration and agile development practices. Passionate about staying current with emerging technologies and leveraging certifications in AWS, Azure, and cybersecurity to deliver impactful results and drive organizational growth.",
  education: [
    {
      schoolName: "George Mason University",
      specialization: "Bachelor of Science in Information Technology",
      monthOfPassing: "December",
      yearOfPassing: "2023",
      achievements:
        "IT Architecture, Systems Analysis and Design, Object-Oriented Programming, Operating Systems, Databases, Cybersecurity, Advanced Web Development, Networking, Cloud Computing, Project Management, Information Visualization.",
    },
    {
      schoolName: "George Mason University",
      specialization: "Minor in Business",
      monthOfPassing: "December",
      yearOfPassing: "2023",
      achievements:
        "Accounting, Entrepreneurship, Management, Marketing, Corporate Finance and Investments.",
    },
  ],
  work: [
    {
      companyName: "Revature",
      role: "Software Engineer",
      summary:
        "Enrolled in an intensive, full-time training program in advanced full-stack development, mastering Java with Spring Boot, React, AWS, and Postgres to build scalable and dynamic web applications. Utilized AWS for cloud computing and managed version control with Git/GitHub. Developed a Java Full Stack Employee Reimbursement System (ERS) with React, Spring Boot, and Postgres, including reimbursement submissions, manager approval workflows, and secure authentication.",
      monthOfStarting: "December",
      yearOfStarting: "2022",
      monthOfLeaving: "",
      yearOfLeaving: "",
      achievements: "",
      presentEmployer: true,
    },
    {
      companyName: "GAMEC",
      role: "Web Developer",
      summary:
        "Spearheaded the design and development of the official website for the Global Association of Muslim Eritrean Communities (GAMEC), a nonprofit organization. Managed website updates, maintenance, and troubleshooting to ensure optimal performance and security. Evaluated emerging technologies and trends in web development and digital communication to recommend innovative solutions for GAMEC's online presence.",
      monthOfStarting: "August",
      yearOfStarting: "2023",
      monthOfLeaving: "December",
      yearOfLeaving: "2024",
      achievements: "",
      presentEmployer: false,
    },
    {
      companyName: "Crocodile Solutions",
      role: "Frontend Developer Intern",
      summary:
        "Upgraded legacy applications for a leading legal software company, significantly enhancing performance and user experience. Developed efficient and responsive single-page applications (SPAs) utilizing advanced front-end technologies, including HTML, CSS, React, and Next.js. Integrated back-end functionalities into front-end applications through seamless collaboration with RESTful web services.",
      monthOfStarting: "April",
      yearOfStarting: "2023",
      monthOfLeaving: "July",
      yearOfLeaving: "2023",
      achievements: "",
      presentEmployer: true,
    },
    {
      companyName: "Zero To Mastery Academy",
      role: "Open-Source Developer",
      summary:
        "Contributed to open-sourced projects for Zero To Mastery Academy involving reviewing code submissions, raising/fixing issues in code, and ensuring deployments are up and running.",
      monthOfStarting: "Jan",
      yearOfStarting: "2022",
      monthOfLeaving: "Dec",
      yearOfLeaving: "2022",
      achievements: "",
      presentEmployer: false,
    },
  ],
  skills: [
    { skillname: "JavaScript", yearsOfExperience: 4 },
    { skillname: "React", yearsOfExperience: 2 },
    { skillname: "Next.js", yearsOfExperience: 1 }, // Added Next.js
    { skillname: "Node.js", yearsOfExperience: 2 },
    { skillname: "Java", yearsOfExperience: 2 }, // Added Java
    { skillname: "Javalin", yearsOfExperience: 1 }, // Added Javalin
    { skillname: "Python", yearsOfExperience: 2 },
    { skillname: "MySQL", yearsOfExperience: 2 },
    { skillname: "PL/SQL", yearsOfExperience: 1 }, // Added PL/SQL
    { skillname: "MongoDB", yearsOfExperience: 1 },
    { skillname: "HTML", yearsOfExperience: 4 },
    { skillname: "CSS", yearsOfExperience: 4 },
    { skillname: "GraphQL", yearsOfExperience: 1 }, // Added GraphQL
    { skillname: "AWS", yearsOfExperience: 1 }, // Added AWS
    { skillname: "Azure", yearsOfExperience: 1 }, // Added Azure
    { skillname: "Git", yearsOfExperience: 2 }, // Added Git
    { skillname: "Docker", yearsOfExperience: 1 }, // Added Docker
    { skillname: "Azure DevOps", yearsOfExperience: 1 }, // Added Azure DevOps
  ],

  projects: [
    {
      id: 1,
      image: IMG1,
      title:
        "The Expense Reimbursement System manages the process of reimbursing employees for expenses incurred while on company time.",
      link: "https://github.com/aabdulk862/Expense-Reimbursement-System",
    },
    {
      id: 2,
      image: IMG2,
      title:
        "Restaurant management system that allows users to perform CRUD operations on the menu items. Built with React and Express.",
      link: "https://github.com/aabdulk862/adams-corner",
      demo: "https://adams-corner.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title:
        "Royal Clothing Outlet - Ecommerce site made with React, Redux, Stripe, Firebase.",
      link: "https://github.com/aabdulk862/royal-clothing-outlet",
      demo: "https://royal-clothing-outlet.netlify.app/",
    },
    {
      id: 4,
      image: IMG4,
      title:
        "Kanban Board - Project management tool designed to help visualize work.",
      link: "https://github.com/aabdulk862/kanban-board",
      demo: "https://aabdulk862.github.io/kanban-board/",
    },
    {
      id: 5,
      image: IMG5,
      title:
        "Paint Clone - Allows user save their work as an image and to local storage.",
      link: "https://github.com/aabdulk862/paint-clone-js",
      demo: "https://aabdulk862.github.io/paint-clone-js/",
    },
    {
      id: 6,
      image: IMG6,
      title:
        "Custom Countdown - Counts down the days, hours, minutes, and seconds to a given date.",
      link: "https://github.com/aabdulk862/custom-countdown-app",
      demo: "https://aabdulk862.github.io/custom-countdown-app/",
    },
  ],

  references: [
    {
      name: "Keyeriya Anwar",
      description: "Devops Engineer",
      email: "keyeriyaa@gmail.com",
      phone: "703-565-3928",
    },
    {
      name: "Anwar Atta",
      description: "Quality Assurance Tester",
      email: "",
      phone: "571-234-3760",
    },
    {
      name: "Khalid Ibrahim",
      description: "GAMEC",
      email: "khlid1992suleman@gmail.com",
      phone: "202-423-6162",
    },
  ],
};

export default resumeData;
