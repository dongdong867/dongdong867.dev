export type ProjectType = {
  icon: string;
  name: string;
  start: string;
  end: string;
  position: string;
  type: string;
  tech: string[];
};

export const projects = [
  {
    icon: "dong.png",
    name: "Dongdong867",
    start: "2023/08",
    end: "2024/03",
    position: "Developer, Designer",
    type: "Brand Design, Web Dev",
    tech: "NextJS, React, Framer Motion",
  },
  {
    icon: "opennccu.png",
    name: "OpenNCCU",
    start: "2022/09",
    end: "--",
    position: "Tech Lead, Fullstack Dev",
    type: "PWA, Web Dev",
    tech: "Nuxt3, Vue.js, Firestore, Node.js, TypeScript, Docker",
  },
  {
    icon: "what2eat.png",
    name: "What2Eat",
    start: "2023/12",
    end: "--",
    position: "Fullstack Dev",
    type: "PWA, Web Dev, Web Crawling",
    tech: "Nuxt3, Vue.js, Firestore, TypeScript, Python, Selenium, Docker",
  },
  {
    icon: "simpos.png",
    name: "SimPOS",
    start: "2024/01",
    end: "2024/02",
    position: "iOS Dev",
    type: "Mobile Dev",
    tech: "Swift, SwiftUI, Swift Data",
  },
  {
    icon: "csrone.png",
    name: "CSRone",
    start: "2023/08",
    end: "--",
    position: "NLP Engineer",
    type: "NLP, Text Mining",
    tech: "Transformers, RoBERTa, Python, MySQL",
  },
  {
    icon: "gocafe.png",
    name: "Go Cafe",
    start: "2023/04",
    end: "2023/07",
    position: "Fullstack Dev",
    type: "PWA, Web Dev, Database Management",
    tech: "NextJS, Nest.JS, MySQL, Firestore, GraphQL, GCP, Vercel",
  },
];
