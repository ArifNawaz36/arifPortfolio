/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Arif's Portfolio",
  description:
    "An enthusiastic and adaptable individual who constantly seeks out challenging and demanding tasks, dedicated to solving problems by developing scalable and robust backend systems that make a significant impact.",
  og: {
    title: "Arif Nawaz Portfolio",
    type: "website",
    url: "https://arifnawaz36.github.io",
  },
};

//Home Page
const greeting = {
  title: "Arif Nawaz",
  logo_name: "ArifNawaz",
  nickname: "Dynamo",
  subTitle:
    "An enthusiastic and adaptable individual who constantly seeks out challenging and demanding tasks, dedicated to solving problems by developing scalable and robust backend systems that make a significant impact.",
  resumeLink:
    "https://drive.google.com/file/d/1C4c9LW3tENIUGB2wXCBkomnM62dVFsDl/view?usp=sharing",
  portfolio_repository: "https://github.com/ArifNawaz36/arifPortfolio",
  githubProfile: "https://github.com/ArifNawaz36",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ArifNawaz36",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/arif-nawaz-53863a11a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:arifnawaz669@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/iarifnawaz",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/arifnawaz313/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Extensive experience in building backend solutions",
        "⚡ Currently working on the development of *Hubex*, a product leveraging Python, FastAPI, PostgreSQL, and serverless architecture",
        "⚡ Highly skilled in MERN and MEAN stack technologies",
        "⚡ Proficient in developing scalable and robust solutions using Node.js, Express.js, MongoDB, and microservices",
        "⚡ Deep understanding of RESTful APIs and experience in designing and implementing them effectively",
        "⚡ Strong knowledge of software development best practices, including agile methodologies and test-driven development (TDD)",
        "⚡ Ability to troubleshoot and debug complex issues",
        "⚡ Passionate and curious to learn new technologies",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#05998b",
          },
        },
        {
          skillName: "PyPi",
          fontAwesomeClassname: "simple-icons:pypi",
          style: {
            color: "#4B8BBE",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Passionate about the DevOps technology and currently learning about it",
        "⚡ Experience working on multiple cloud platforms like AWS and Azure",
        "⚡ Familiarity with containerization technologies like Docker and Kubernetes",
        "⚡ Hosting and maintaining websites on multiple cloud providers e.g. Heroku, AWS (Lambda)",
        "⚡ Proficient in database design and management, including query optimization and performance tuning",
        "⚡ Skilled in version control systems such as Git, enabling efficient collaboration and code management",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed highly scalable production ready Chatbot using Google's Dialogflow and Node.js, enabling customers to search, book, and transact cars in a few clicks",
        "⚡ Familiarity and hands-on experience with Machine learning libraries e.g. scikit-learn, tensorflow, pandas etc",
        "⚡ Data analysis using Hadoop and MapReduce",
        "⚡ Highly interested to further improve my Machine learning and AI skills",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Chatbot",
          fontAwesomeClassname: "simple-icons:chatbot",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Leadership",
      fileName: "DesignImg",
      skills: [
        "⚡ Successfully led a 7-member team to achieve project goals, and deadlines, and exceed expectations",
        "⚡ Strengthened team management, problem-solving, decision-making, and leadership skills while fostering a collaborative team environment that drove innovation and excellence",
        "⚡ Effectively communicated project vision and goals to team members, resulting in improved performance and productivity. Delegated tasks to team members, utilizing their strengths and skills",
        "⚡ Proactively mentor and support team members, providing guidance on best practices and offering assistance as needed to ensure their professional development and success",
      ],
      softwareSkills: [
        {
          skillName: "Leadership",
          imageSrc: "leadership_logo.jpeg",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Problem Solving",
          imageSrc: "problem_solving_logo.jpg",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Adaptability",
          imageSrc: "adaptability_logo.jpeg",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Collaboration",
          imageSrc: "collaboration_logo.png",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Communication",
          imageSrc: "communication_logo.jpg",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/arifnawaz/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/arifnawaz",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/arifnawaz",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Of Peshawar, Pakistan",
      subtitle: "Bachelors in Computer Science",
      logo_path: "UOP_logo.png",
      alt_name: "UOP",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Graduated with honors, specializing in algorithms, data structures, and software development.",
        "⚡ Led a team in developing an application using Hadoop and MapReduce to analyze OPD data for local healthcare organizations, resulting in increased efficiency.",
        "⚡ Ranked in the top 5% of the graduating class, showcasing exceptional aptitude and dedication in the field of Computer Science.",
      ],
      website_link: "http://www.uop.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "McKinsey Forward Program",
      subtitle: "- McKinsey & Company",
      logo_path: "McKinsey_&_Company_Logo.png",
      alt_name: "McKinsey & Company",
      certificate_link:
        "https://www.credly.com/badges/93aec2e5-cb31-4d08-ad19-956997f0db8d/linked_in_profile",
      color_code: "#1F70C199",
    },
    {
      title: "Cloud Native Foundation",
      subtitle: "- Katie Gamanji",
      logo_path: "udacity_logo.png",
      alt_name: "Udacity",
      color_code: "#2A73CC",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      alt_name: "Coursera",
      color_code: "#8C151599",
    },
    {
      title: "Launching into Machine Learning",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      alt_name: "Coursera",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WW6UDVXLHVQ4",
      color_code: "#2A73CC",
    },
    {
      title: "How Google Does Machine Learning",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      alt_name: "Coursera",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/XN88GZY5FB4F",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "During my time in Netsol, I have worked on some of the most exiting and challenging projects using state-of-the-art technologies. Started from being a data science intern to now a lead software engineer in just 4 years speaks highly about my passion and enthusiasm.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior/Lead Software Engineer",
          company: "Netsol Technologies",
          company_url: "https://www.netsoltech.com",
          logo_path: "netsol_logo.jpeg",
          duration: "July 2022 - Present",
          location: "Lahore, Pakistan",
          description:
            "In my current role, I am leading a team in the development of Hubex, an exceptional integration hub that revolutionizes access to various third-party APIs. Our ultimate goal is to provide a unified platform that seamlessly integrates APIs from providers such as Stripe, Plaid, Socure, and Mitek, enabling multiple integrations with ease. As the team leader, I have successfully guided and motivated a talented group of seven individuals to surpass project goals and meet challenging deadlines. By fostering a collaborative environment, we have cultivated a culture of innovation and excellence, pushing boundaries to deliver exceptional results. Effective communication has been crucial to our success. I have consistently ensured that the team understands and embraces our project's vision and goals, resulting in improved performance and increased productivity. By delegating tasks based on individual strengths and skills, we have maximized our collective output. In addition to my leadership responsibilities, I also proactively mentor and support team members. I provide guidance on best practices, assist in problem-solving, and offer support to ensure their ongoing professional development and success. As we strive for continuous improvement, I am dedicated to staying up-to-date with the latest industry trends and technologies. I have gained proficiency in DevOps tools such as Containerization, Docker, and Kubernetes. Currently, I am actively learning to deploy serverless applications to AWS Lambda using the AWS CDK, further expanding my skill set to enhance our technological capabilities.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "Netsol Technologies",
          company_url: "https://www.netsoltech.com",
          logo_path: "netsol_logo.jpeg",
          duration: "March 2020 - July 2022",
          location: "Lahore, Pakistan",
          description:
            "In my previous role, I played a pivotal role in conceptualizing and building a groundbreaking retail solution for BMW Group, an unprecedented accomplishment within the US automotive retail industry. This cutting-edge solution has been successfully deployed in over 50 states and has processed an impressive USD 6 million in transactions over the past 12 months, revolutionizing the way automotive retail operates. One of my key contributions was leading the implementation of a fraud check solution that utilized third-party APIs from Socure and Innovis. By incorporating these APIs, we were able to conduct essential Know Your Customer (KYC) checks, resulting in a remarkable 90% reduction in fraudulent data. This implementation significantly enhanced the security and trustworthiness of the system, safeguarding the interests of both the business and customers. Additionally, I took ownership of the design, development, and maintenance of the pricing engine, a critical component of our application. This engine seamlessly integrated with BMW Financial Services (FS), enabling accurate and timely pricing calculations. By ensuring the accuracy and reliability of pricing information, we enhanced the overall customer experience and facilitated smoother transactions. Throughout the development process, I actively participated in design and architecture sessions, collaborating with cross-functional teams to develop new features and enhancements. Recognizing the importance of core system services, I proactively assumed responsibility for their development and maintenance. This hands-on approach ensured the robustness and performance of the system, contributing to its overall success.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science/Machine Learning Intern",
          company: "Netsol Technologies",
          company_url: "https://www.netsoltech.com",
          logo_path: "netsol_logo.jpeg",
          duration: "Aug 2019 - Feb 2020",
          location: "Lahore, Pakistan",
          description:
            "During my internship, I successfully developed a robust Chatbot using Google's Dialogflow and NodeJs for Drivemate, a prominent shared mobility provider in Thailand. This Chatbot revolutionized the customer experience by enabling users to effortlessly search, book, and transact car rentals with just a few clicks on the bot interface. As a result of this implementation, the company witnessed a remarkable 20% increase in car rental bookings. Additionally, I cultivated a strong reputation within the team, earning respect and trust through my valuable contributions and positive interactions.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "arif_animated_c.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Pabbi - 24310 Dist.-Nowshera, Pakistan",
    locality: "Nowshera",
    country: "PK",
    region: "Pabbi",
    postalCode: "24310",
    streetAddress: "Street N # 10",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 315 3131375",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
