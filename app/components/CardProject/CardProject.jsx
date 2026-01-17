import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ href, src, alt, technos, styleClass }) {
  return (
    <Link 
      href={href} 
      className={`${styles["project-card"]} ${styles[styleClass] || ""}`}
    >
      <div className={styles["image-wrapper"]}>
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className={styles.img}
        />
      </div>
      <div className={styles["card-content"]}>
        <h3 className={styles.title}>{alt}</h3>
        <p className={styles.technos}> - {technos}</p>
      </div>
    </Link>
  );
}