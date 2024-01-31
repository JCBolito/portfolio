type T_Projects = {
  title: string;
  date: string;
  technologies: string[];
  description: string;
  imageDirectory: string;
  image: string;
  url?: string;
  repository?: string;
};

export const projects: T_Projects[] = [
  {
    title: "PLM Educational Assistance Management System",
    date: "November 2022 – June 2023",
    technologies: ["Tailwind CSS", "JavaScript", "React", "Next.js"],
    description: `With me as a frontend developer, me and my team developed a system that 
	streamlines the student application and management process of PLM Scholarships.`,
    url: "https://web5.plm.edu.ph/scholarship",
    imageDirectory: "/projects/PLM-EAMS",
    image: "/osds-page.png",
  },
  {
    title: "Haribon",
    date: "November 2022 – February 2023",
    technologies: ["CSS3", "JavaScript", "React", "Next.js", "MongoDB"],
    description: `A full-stack web application I developed as a project for my very first 
	bootcamp as a volunteer web developer for Google Developer Student Clubs PLM. Due to other 
	responsibilities at the time, some features were left unfinished.`,
    url: "https://haribon.vercel.app",
    repository: "https://github.com/GDSC-PLMWebTeam3/haribon.git",
    imageDirectory: "/projects/Haribon",
    image: "/feed.png",
  },
  {
    title: "Haribon",
    date: "November 2022 – February 2023",
    technologies: ["CSS3", "JavaScript", "React", "Next.js", "MongoDB"],
    description: `A full-stack web application I developed as a project for my very first 
	bootcamp as a volunteer web developer for Google Developer Student Clubs PLM. Due to other 
	responsibilities at the time, some features were left unfinished.`,
    url: "https://haribon.vercel.app",
    repository: "https://github.com/GDSC-PLMWebTeam3/haribon.git",
    imageDirectory: "/projects/Haribon",
    image: "/feed.png",
  },
  {
    title: "Haribon",
    date: "November 2022 – February 2023",
    technologies: ["CSS3", "JavaScript", "React", "Next.js", "MongoDB"],
    description: `A full-stack web application I developed as a project for my very first 
	bootcamp as a volunteer web developer for Google Developer Student Clubs PLM. Due to other 
	responsibilities at the time, some features were left unfinished.`,
    url: "https://haribon.vercel.app",
    repository: "https://github.com/GDSC-PLMWebTeam3/haribon.git",
    imageDirectory: "/projects/Haribon",
    image: "/feed.png",
  },
];
