interface Response {
  commands: string;
  whoami: string;
  connects: string;
  projects: {
    "-ls": string;
    [key: string]: string;
  };
  experiences: {
    "-ls": string;
    [key: string]: string;
  };
  "tech-stack": {
    "-ls": string;
    [key: string]: string;
  };
  [key: string]: any;
}

export const responses: Response = {
  commands:
    "Commands:<br />" +
    "&emsp;whoami<br />" +
    "&emsp;&emsp;description of dongdong867<br />" +
    "<br />" +
    "&emsp;projects<br />" +
    "&emsp;&emsp;-ls<br />" +
    "&emsp;&emsp;&emsp;list all existing projects<br />" +
    "&emsp;&emsp;[PROJECT_NAME]<br />" +
    "&emsp;&emsp;&emsp;print information of the project given<br />" +
    "<br />" +
    "&emsp;experiences<br />" +
    "&emsp;&emsp;-ls<br />" +
    "&emsp;&emsp;&emsp;list all experiences<br />" +
    "&emsp;&emsp;[(COMPANY/ORG) NAME]<br />" +
    "&emsp;&emsp;&emsp;print information of the experience in company/organization given<br />" +
    "<br />" +
    "&emsp;tech-stack <br />" +
    "&emsp;&emsp;-ls<br />" +
    "&emsp;&emsp;&emsp;list all categories of tech stack<br />" +
    "&emsp;&emsp;[CATEGORY_NAME]<br />" +
    "&emsp;&emsp;&emsp;list all tech skills of the category given<br />" +
    "<br />" +
    "&emsp;connects<br />" +
    "&emsp;&emsp;-ls<br />" +
    "&emsp;&emsp;&emsp;list all contacts information",
  whoami:
    "Hello world!<br /><br />" +
    "I'm Dongdong867,<br />" +
    "&emsp;a independent developer @Taipei, Taiwan,<br />" +
    "&emsp;a junior MIS student @NCCU,<br />" +
    "&emsp;co-founder of OpenNCCU.<br /><br />" +
    "Currently working on<br />" +
    "&emsp;- LLM based group recommendation system<br />" +
    "&emsp;- NLP research @CSRone&NCCU<br />" +
    "&emsp;- projects and services @OpenNCCU<br /><br />" +
    "On the journey to improving people's life and making positive contribution.",
  projects: {
    "-ls":
      "Projects:<br />" +
      "&emsp;- dong<br />" +
      "&emsp;- opennccu<br />" +
      "&emsp;- what2eat<br />" +
      "&emsp;- simpos<br />" +
      "&emsp;- csrone<br />" +
      "&emsp;- gocafe",
    dong:
      "<div class='text-cyan font-bold'>Dong brand design</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/08<br />" +
      "<span class='text-orange font-bold'>End:</span> 2024/03<br />" +
      "<span class='text-orange font-bold'>Position:</span> Developer, Designer<br />" +
      "<span class='text-orange font-bold'>Type:</span> Brand Design, Web Development<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> NextJS, React, Framer Motion",
    opennccu:
      "<div class='text-cyan font-bold'>OpenNCCU</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2022/09<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "<span class='text-orange font-bold'>Position:</span> Tech Lead, Fullstack Developer<br />" +
      "<span class='text-orange font-bold'>Type:</span> PWA, Web Development<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> Nuxt3, Vue.js, Firestore, Node.js, TypeScript, Docker",
    what2eat:
      "<div class='text-cyan font-bold'>What2Eat</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/12<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "<span class='text-orange font-bold'>Position:</span> Fullstack Developer<br />" +
      "<span class='text-orange font-bold'>Type:</span> PWA, Web Dev, Web Crawling<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> Nuxt3, Vue.js, Firestore, TypeScript, Python, Selenium, Docker",
    simpos:
      "<div class='text-cyan font-bold'>SimPOS</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2024/01<br />" +
      "<span class='text-orange font-bold'>End:</span> 2024/02<br />" +
      "<span class='text-orange font-bold'>Position:</span> iOS Developer<br />" +
      "<span class='text-orange font-bold'>Type:</span> Mobile Development<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> Swift, SwiftUI, Swift Data",
    csrone:
      "<div class='text-cyan font-bold'>CSRone</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/08<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "<span class='text-orange font-bold'>Position:</span> NLP Engineer<br />" +
      "<span class='text-orange font-bold'>Type:</span> NLP, Text Mining<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> Transformers, RoBERTa, Python",
    gocafe:
      "<div class='text-cyan font-bold'>Go Cafe</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/04<br />" +
      "<span class='text-orange font-bold'>End:</span> 2023/07<br />" +
      "<span class='text-orange font-bold'>Position:</span> Fullstack Developer<br />" +
      "<span class='text-orange font-bold'>Type:</span> PWA, Web Development, Database Management<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> NextJS, Nest.JS, MySQL, Firestore, GraphQL, GCP, Vercel",
  },
  experiences: {
    "-ls":
      "Experiences:<br />" +
      "&emsp;- csrone<br />" +
      "&emsp;- opennccu<br />" +
      "&emsp;- gdsc<br />" +
      "&emsp;- bsg<br />",
    csrone:
      "<div class='text-cyan font-bold'>CSRone</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Position:</span> NLP Researcher<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/08<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> Transformers, RoBERTa, Python, MySQL",
    opennccu:
      "<div class='text-cyan font-bold'>OpenNCCU</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Position:</span> Tech Lead<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/09<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Position:</span> Fullstack Developer<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/08<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> Nuxt3, Vue3.js, Node.js, Firebase, Typescript, Python, Selenium, Docker",
    gdsc:
      "<div class='text-cyan font-bold'>GDSC NCCU</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Position:</span> Tech Team<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/09<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> NextJS, React, NextAuth Firebase, Docker",
    bsg:
      "<div class='text-cyan font-bold'>BSG NCCU</div>" +
      "-----------------<br />" +
      "<span class='text-orange font-bold'>Position:</span> General Affairs<br />" +
      "<span class='text-orange font-bold'>Start:</span> 2023/08<br />" +
      "<span class='text-orange font-bold'>End:</span> --<br />" +
      "<span class='text-orange font-bold'>Tech used:</span> NextJS, React, Vercel",
  },
  "tech-stack": {
    "-ls":
      "Categories:<br />" +
      "&emsp;- frontend<br />" +
      "&emsp;- backend<br />" +
      "&emsp;- mobile<br />" +
      "&emsp;- database<br />" +
      "&emsp;- programming-languages<br />" +
      "&emsp;- hosting<br />" +
      "&emsp;- others",
    frontend:
      "Frontend:<br />" +
      "<div class='flex space-x-4'><div>" +
      "<div>- Next.js</div>" +
      "<div>- React.js</div>" +
      "<div>- TailwindCSS</div>" +
      "</div><div>" +
      "<div>- Nuxt3</div>" +
      "<div>- Vue3.js</div>" +
      "<div>- Framer Motion</div>" +
      "</div></div>",
    backend:
      "Backend:<br />" +
      "<div class='flex space-x-4'><div>" +
      "<div>- Node.js</div>" +
      "<div>- Express.js</div>" +
      "<div>- Vapor</div>" +
      "</div><div>" +
      "<div>- NestJS</div>" +
      "<div>- Spring Boot</div>" +
      "<div>- Flask</div>" +
      "</div></div>",
    mobile:
      "Mobile:<br />" +
      "<div class='flex space-x-4'><div>" +
      "<div>- Swift</div>" +
      "<div>- SwiftData</div>" +
      "<div>- UiKit</div>" +
      "</div><div>" +
      "<div>- SwiftUI</div>" +
      "<div>- Core Data</div>" +
      "<div>- PWA</div>" +
      "</div></div>",
    database:
      "Database:<br />" +
      "<div class='flex space-x-4'><div>" +
      "<div>- PostgreSQL</div>" +
      "<div>- SQLite</div>" +
      "<div>- MongoDB</div>" +
      "<div>- Redis</div>" +
      "<div>- Drizzle</div>" +
      "</div><div>" +
      "<div>- MySQL</div>" +
      "<div>- GraphQL</div>" +
      "<div>- Firebase</div>" +
      "<div>- Prisma</div>" +
      "</div></div>",
    "programming-languages":
      "Programming Languages:<br />" +
      "<div class='flex space-x-4'><div>" +
      "<div>- TypeScript</div>" +
      "<div>- React.js</div>" +
      "<div>- Python</div>" +
      "<div>- Swift</div>" +
      "<div>- HTML</div>" +
      "</div><div>" +
      "<div>- JavaScript</div>" +
      "<div>- Vue3.js</div>" +
      "<div>- Java</div>" +
      "<div>- Rust</div>" +
      "<div>- CSS</div>" +
      "</div></div>",
    hosting:
      "Database:<br />" +
      "<div class='flex space-x-4'><div>" +
      "<div>- Docker</div>" +
      "<div>- GitHub</div>" +
      "<div>- GCP</div>" +
      "</div><div>" +
      "<div>- Vercel</div>" +
      "<div>- Nginx</div>" +
      "<div>- AWS</div>" +
      "</div></div>",
    others:
      "Others:<br />" +
      "<div class='flex space-x-4'><div>" +
      "<div>- Pytorch</div>" +
      "<div>- Selenium</div>" +
      "</div><div>" +
      "<div>- Transformers</div>" +
      "<div>- NextAuth.js</div>" +
      "</div></div>",
  },
  connects:
    "Connects:<br />" +
    "<div class='flex space-x-4'><div class='text-orange font-bold text-right'>" +
    "<div>Mail:</div>" +
    "<div>GitHub:</div>" +
    "<div>LinkedIn:</div>" +
    "<div>Discord:</div>" +
    "</div><div>" +
    "<div>dongdong0867@gmail.com</div>" +
    "<div>https://github.com/dongdong867</div>" +
    "<div>https://linkedin.com/in/dongdong867</div>" +
    "<div>https://discordapp.com/users/978679087067435039</div>" +
    "</div></div>",
};
