import project1 from "../assets/projects/Blog.png"
import project2 from "../assets/projects/E-commerce.png"
import project3 from "../assets/projects/Dice-game.png"
import project4 from "../assets/projects/Contact-page.png"


export const PROJECTS = [
  {
    title: "Blog Management App (React + Tailwind )",
    image: project1 ,
    description:
      "React + Tailwind blog UI with client-side CRUD (add, edit, delete) — no backend.",
    technologies: ["HTML", "CSS", "React", "TypeScript", "TailwindCSS"],
    link:"https://blog-management-app-6j3t.vercel.app/"
  },
  {
    title: "E-Commerce Website",
    image: project2 ,
    description:
      "Created a mini e-commerce frontend with powerful product filtering features",
    technologies: ["HTML", "CSS", "React"],
        link:"https://e-commerce-advance-filtering-projec.vercel.app/"

  },
  {
    title: "Dice-Game",
    image: project3,
    description:
      "A mini game built in React JS where players roll dice, with random number generation, state management, and interactive UI",
    technologies: ["HTML", "CSS", "React JS"],
    link:"https://react-dice-game-teal.vercel.app/"
  },
  {
    title: "Contact-us",
    image: project4,
    description:
      "A Contact Us page built in React JS featuring input fields, validation, and form submission UI.",
    technologies: ["HTML", "CSS", "React"],
    link:"https://contact-us-landing-page.vercel.app/"
  },
  
];


export const CONTACT={
    address:"16/374-3-1, Ghouse-Nagar, Kadapa-516001",
    phone:"+91 95735 47546",
    email:"akram94407@gmail.com"
};