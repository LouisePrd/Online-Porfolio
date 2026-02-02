import { projectsData, Project } from "../../../data/projects";
import Image from "next/image";
import styles from "./ProjectTemplate.module.css";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) notFound();

  return (
    <main className={`${styles.projectPage} ${styles[project.styleClass]}`}>
      <h1 className="sub-title">{project.title}</h1>
      <p className={styles.intro}>{project.intro}</p>

      <div className={styles.projectContainer}>
        <div className={styles.presentation}>
          <p>
            <span className={styles.bold}>Project type :</span> {project.type}
          </p>
          <p>
            <span className={styles.bold}>Date :</span> {project.date}
          </p>
          <p>
            <span className={styles.bold}>Context :</span> {project.context}
          </p>
          <p>
            <span className={styles.bold}>Technologies :</span>{" "}
            {project.technos}
          </p>
        </div>
        <div className={styles.description}>
          <span className={styles.bold}>Description :</span>
          <p>{project.description}</p>
        </div>
      </div>

      <div className={styles.btnLinks}>
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View website
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            View repo
          </a>
        )}
        {project.reportUrl && (
          <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
            View Report
          </a>
        )}
        {project.companyUrl && (
          <a
            href={project.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBtn}
          >
            View company
          </a>
        )}
      </div>

      <div className={styles.results}>
        {project.verticalImages?.map((img, index) => (
          <div key={`v-${index}`} className={styles.verticalWrapper}>
            <Image
              src={img}
              alt="Vertical view"
              width={400}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}

        {project.videoUrl && (
          <div className={styles.videoContainer}>
            <iframe
              src={project.videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {project.panoramaImg && (
          <div className={styles.panoramaWrapper}>
            <Image
              src={project.panoramaImg}
              alt="Panorama"
              width={1600}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        )}

        {project.images?.map((img, index) => (
          <div key={`s-${index}`} className={styles.imageWrapper}>
            <Image
              src={img}
              alt="Gallery image"
              width={800}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}

        <div className={styles.gifWrapper}>
          {project.gifUrl?.map((img, index) => (
            <Image
              key={`gif-${index}`}
              src={img}
              alt="Project animation gif"
              width={600}
              height={250}
              unoptimized
              style={{ width: "100%", height: "auto" }}
              className={styles.gifImage}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
