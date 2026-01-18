import Image from "next/image";
import styles from "./Projects3D.module.css";

export default function Projects3D() {
  const medias: Array<
    { type: "img"; src: string; alt: string } | { type: "video"; src: string }
  > = [
    { type: "img", src: "/imgs/projects/3d/trophees.png", alt: "trophees" },
    { type: "img", src: "/imgs/projects/3d/Trophee-film.png", alt: "trophée" },
    { type: "img", src: "/imgs/projects/3d/switch.png", alt: "switch" },
    { type: "img", src: "/imgs/projects/3d/ex-1.png", alt: "logo IMAC" },
    { type: "img", src: "/imgs/projects/3d/cat-wip.png", alt: "cat" },
    { type: "video", src: "/imgs/projects/3d/animation.mp4" },
    { type: "video", src: "/imgs/projects/3d/kirby.mp4" },
    { type: "video", src: "/imgs/projects/3d/pigeon.mp4" },
  ];

  return (
    <main className={styles["main-content"]}>
      <h1 className="sub-title" id="top">
        3D Projects
      </h1>

      <section className={styles.gridContainer}>
        {medias.map((item, index) => (
          <div key={index} className={styles.mediaCard}>
            {item.type === "img" && (
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={300}
                className={styles.mediaItem}
              />
            )}
            {item.type === "video" && (
              <video controls className={styles.mediaItem}>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </section>

      <a className="ancre" href="#top">
        ↑ Back to top
      </a>
    </main>
  );
}
