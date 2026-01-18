import ProjectCard from "../../components/CardProject/CardProject";
import Link from "next/link";
import styles from "./ITProjects.module.css";

const projects = [
  {
    href: "/projects/it/preWatch",
    src: "/imgs/projects/preWatch/preWatch-demo.webp",
    alt: "preWatch",
    technos: "WebGL, Next.js, MongoDB",
    styleClass: "preWatch",
  },
  {
    href: "/projects/it/auFilDuTemps",
    src: "/imgs/projects/auFilDuTemps/AuFilDuTemps1.png",
    alt: "Au Fil Du Temps",
    technos: "GSAP, noise.js, paper.js",
    styleClass: "auFilDuTemps",
  },
  {
    href: "/projects/it/marieGobelins",
    src: "/imgs/projects/mari-e/brochure-marie.png",
    alt: "Brochure Marie",
    technos: "WebXR, ThreeJS, DALL-E",
    styleClass: "marieGobelins",
  },

  {
    href: "/projects/it/rerAGate",
    src: "/imgs/projects/rerAGate/rer-a-gate.png",
    alt: "RER A Gate",
    technos: "C++, CMake, OpenGL",
    styleClass: "rerAGate",
  },
  {
    href: "/projects/it/averagePlayer",
    src: "/imgs/projects/averagePlayer/Champions.png",
    alt: "Average Player",
    technos: "React.js, Supabase",
    styleClass: "averagePlayer",
  },
  {
    href: "/projects/it/pigeonGate",
    src: "/imgs/projects/pigeonGate/pigeon-gate.png",
    technos: "Flask, Python",
    alt: "Pigeon Gate",
    styleClass: "pigeonGate",
  },
  {
    href: "/projects/it/elixir",
    src: "/imgs/projects/elixir/Elixir.png",
    alt: "Elixir",
    technos: "HTML/CSS, JavaScript & CocktailDB API",
    styleClass: "elixir",
  },
  {
    href: "/projects/it/inusTale",
    src: "/imgs/projects/inusTale/inus-tale.png",
    alt: "Inus Tale",
    technos: "Godot, GD Script",
    styleClass: "inusTale",
  },
];

export default function ITProjects() {
  return (
    <main className={styles["main-content"]} >
      <h1 className="sub-title" id="top">IT Projects</h1>

      <section className={styles["projects-grid"]}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>

            <a className="ancre" href="#top">
        ↑ Back to top
      </a>
    </main>
  );
}
