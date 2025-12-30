
import { SkillCategory, Project, Experience, Education } from './types';

export const PERSONAL_INFO = {
  name: "Mohit Jaiswal",
  role: "Senior Flutter Developer",
  email: "er.mohit.pro@gmail.com",
  phone: "+91-6307715099",
  linkedin: "https://www.linkedin.com/in/mohit-jaiswal-8570b4187/",
  gitlab: "https://gitlab.com/mohit789jai1",
  summary: "Sr. Software Developer with over 5.9+ years of experience in mobile, web, and backend development across diverse industries, including FinTech, Bidding, AR, and Marketplace. Expertise in Java, Dart, JavaScript, and Node.js with a comprehensive understanding of the Software Development Life Cycle (SDLC).",
  // Updated with an image representing growth and technology: a plant next to a laptop with code
  profileImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Dart", "Java", "JavaScript", "TypeScript", "C", "C++"]
  },
  {
    title: "Front-End",
    skills: ["Flutter (Android, iOS, Web)", "Dart", "HTML", "CSS3", "React Js"]
  },
  {
    title: "Back-End & DB",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "MySQL", "MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    title: "State Management",
    skills: ["Provider", "GetX", "Bloc", "RiverPod"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Git", "CI/CD", "AWS", "Firebase", "GCP", "Docker", "Vercel"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Digital India (Bhashini - AI/ML)",
    techStack: ["Flutter", "Dart", "GetX"],
    platforms: ["Android", "iOS"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.dibd.bhashini&hl=en_IN",
    iosUrl: "https://apps.apple.com/in/app/bhashini/id6446089978",
    description: "Developed a language translation app to assist Indian citizens in reducing language barriers by providing translation services for various Indian languages.",
    responsibilities: ["Client communication", "Requirement gathering", "UI design", "API integration", "Deployment"],
    image: "https://play-lh.googleusercontent.com/udfxplCiAPEXMlgaSt0UzBMKN9whZN03wc_Rw20AZDCf1K9oY-4-9ery1UkMncDKgpAp3xuLPJ1kSpGAHmTi=w832-h470-rw?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "QL One App",
    techStack: ["Flutter", "Dart", "GetX"],
    platforms: ["Android", "iOS"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.qloneapp&hl=en_IN",
    iosUrl: "https://apps.apple.com/in/app/ql-one/id6714464664",
    description: "Corporate multi-utility application focusing on enterprise efficiency.",
    responsibilities: ["UI Design", "Performance Optimization", "Third-party Integration"],
    image: "https://play-lh.googleusercontent.com/-C9kXUwtKD9utwKn6I_zWOoQ-GebdnsentJrtDfuaFd3QJ1HFcQAIDyrCdczKNxaVQ=w832-h470-rw?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Aux365 (Business Solution)",
    techStack: ["Flutter", "Dart", "Provider"],
    platforms: ["Android", "iOS"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.aux365.io&hl=en_IN",
    iosUrl: "https://apps.apple.com/in/app/aux365/id6476421588",
    description: "Automated texting solution with integrated payment capabilities to enhance business communication.",
    responsibilities: ["UI design", "Third-party API integration", "Agile development", "Deployment"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "AuxCONNECT (Digital Business Card)",
    techStack: ["Flutter", "Dart", "Provider"],
    platforms: ["Android", "iOS"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.auxconnect.io",
    iosUrl: "https://apps.apple.com/us/app/auxconnect/id6474382586",
    description: "Digital business card application that transforms traditional business cards into dynamic, interactive profiles.",
    responsibilities: ["UI/UX design", "API integration", "Development", "Deployment"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Gramstands (Multi-Vendor Marketplace)",
    techStack: ["Flutter", "Dart", "Bloc", "Firebase", "Firestore"],
    platforms: ["iOS"],
    iosUrl: "http://apps.apple.com/us/app/gram-stands/id1365663407",
    description: "Multi-vendor app displaying nearby stores based on user geolocation with store and offer lists.",
    responsibilities: ["UI design", "API integration", "Agile development", "Deployment"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Vizzve Micro Seva",
    techStack: ["Flutter", "Dart", "Bloc"],
    platforms: ["Android"],
    androidUrl: "https://play.google.com/store/apps/details?id=com.vizzve_micro_seva&hl=en-IN",
    description: "Developed a mobile app for managing non-paper loans, including features for loan payments, extensions, and fraud prevention.",
    responsibilities: ["Firebase integration, Google authentication, security implementation, Agile development"],
    image: "https://play-lh.googleusercontent.com/f-et3mHyzm7YaGfqvW5en8EJgnlQqJGDOhBy4yT8IfhHne9Eya2Lm2pbrR5M0OHEx5sOoR6rmZO22IWFuI8cbw=w832-h470-rw?auto=format&fit=crop&q=80&w=800"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Sr. Software Developer",
    company: "Quantumleap Learning Solution PVT LTD",
    period: "Sept 2024 - Dec 2025",
    responsibilities: [
      "Led end-to-end cross-platform development using Flutter & Dart.",
      "Utilized Node.js for scalable back-end solutions.",
      "Managed CI/CD pipelines to automate testing and deployment.",
      "Implemented secure OAuth and JWT authentication."
    ]
  },
  {
    role: "Software Developer",
    company: "Zeksta Technology PVT LTD",
    period: "April 2020 - August 2024",
    responsibilities: [
      "Developed high-performance Flutter applications.",
      "Collaborated with stakeholders to define project scope.",
      "Optimized web applications for performance on AWS and Vercel.",
      "Built RESTful microservices using Node.js/Express."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "MCA",
    institution: "Swami Vivekanand Subharti University",
    year: "2022",
    score: "69%"
  },
  {
    degree: "BCA",
    institution: "Swami Vivekanand Subharti University",
    year: "2020",
    score: "68%"
  }
];
