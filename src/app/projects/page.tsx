import Link from "next/link"
import styles from "../styles/projects.module.css"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "HandTalk",
      description:
        "AI based project to detect sign language and translate it to text in a videocall. fine tuned mobilenet model.",
      tags: ["Tensorflow", "React", "Nodejs","MediaPipe"],
      image: "/icons/handTalk.jpeg",
      github: "https://github.com/Yashgabani845/GestureGenius",
      demo: "https://portfolio.example.com",
    },
    {
      id: 2,
      title: "Taskify",
      description:
        "A project management tool that allows admins to create projects, assign them to different employees, and track their progress with chat and video meetings.",
      tags: ["React", "WebRTC", "Node.js", "MongoDB"],
      image: "/icons/Taskify.png",
      github: "https://github.com/Meet-Thakkar21/project_management",
      demo: "https://ecommerce.example.com",
    },
    {
      id: 3,
      title: "BlogNest",
      description:
        "A platform where users can create, edit, and publish blog posts, as well as interact with other users through comments and likes.",
      tags: ["Django", "Python", "HTML", "CSS","JavaScript"],
      image: "/icons/BlogNest.png",
      github: "https://github.com/Meet-Thakkar21/django_project",
      demo: "https://social.example.com",
    },
    {
      id: 4,
      title: "eBookReader",
      description: "An android application that allows users to read eBooks online and download them for offline reading.",
      tags: ["Dart", "FireBase"],
      image: "/icons/eBookReader.png",
      github: "https://github.com/Meet-Thakkar21/eBookReader",
      demo: "https://ai-image.example.com",
    },
    {
      id: 5,
      title: "Promptopia",
      description:
        "Promptopia is a Next.js-based web application where users can authenticate using their Google account, write and share creative prompts, view other users' prompts, and manage their own prompts in a profile section.",
      tags: ["Next.js", "MongoDb", "Node.js"],
      image: "/icons/Promptopia.png",
      github: "https://github.com/Meet-Thakkar21/promptopia",
      demo: "https://voting.example.com",
    },
    {
      id: 6,
      title: "Portfolio",
      description:
        "A portfolio website that showcases my skills and experience in web development.",
      tags: ["Next.js", "CSS", "JavaScript"],
      image: "/icons/portfolio.webp",
      github: "https://github.com/Meet-Thakkar21/portfolio",
      demo: "https://weather.example.com",
    },
  ]

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>
          Explore my recent work and personal projects that showcase my skills and passion for development.
        </p>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
            </div>
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.projectLinks}>
                <a href={project.github} className={styles.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  <span>Code</span>
                </a>
                {/* <a href={project.demo} className={styles.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.contactCta}>
        <h2>Interested in working together?</h2>
        <Link href="/contact" className={styles.contactButton}>
          <span>Contact Me</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  )
}

