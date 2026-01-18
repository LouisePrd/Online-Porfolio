import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.all}>
      <div className={styles["div-first-title"]}>
        <h1 className={styles["first-title"]}>Creative portfolio</h1>
      </div>

      <nav className={styles.nav}>
        <Link href="/inspirations" className={styles["nav-link"]}>
          Inspirations
        </Link>
        <div className={styles.dropdown}>
          <span className={styles.dropdownLabel}>Projects ▾</span>
          <div className={styles.dropdownContent}>
            <Link href="/projects/it">IT Projects</Link>
            <Link href="/projects/audiovisual">Audiovisual</Link>
            <Link href="/projects/3d">3D</Link>
            <Link href="/projects/associative">Associative</Link>
          </div>
        </div>
        <Link href="/cv" className={styles["nav-link"]}>
          CV
        </Link>
      </nav>

      <div className={styles["presentation-container"]}>
        <div className={styles.presentation}>
          <p className={styles.name}>Louise PERIDY,</p>
          <p className={styles.name}>Student</p>
          <a
            className={`${styles.name} ${styles.link}`}
            href="https://www.esiee.fr/formations/ingenieur/filieres/imac"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMAC - ESIEE
          </a>
          <Image
            src="/imgs/props/memoji.png"
            alt="memoji"
            className={styles.memoji}
            width={150}
            height={150}
          />
        </div>

        <div className={styles["text-presentation"]}>
          <p>
            Who am I? <br />
            <br />
            My name is Louise PERIDY, I am 24 years old and after completing a
            DUT in computer science at the IUT PARIS Descartes, I spent a year
            at Gobelins studying for a bachelor's degree in web & mobile
            development, where I obtained my diploma. I then enrolled in the
            IMAC engineering program at ESIEE Paris in September 2023 and will
            complete my studies in the summer of 2026.
            <br />
            <br />
            I have always been torn between an interest in computer science and
            a curiosity for the arts, which is why I chose to continue my
            studies at this school, which combines these two fields.
            <br />
            <br />
            In this portfolio, you will discover my inspirations and my various
            projects, which reflect my different sensibilities: enjoy your
            visit!
          </p>
          <div className={styles.startdiv}>
            <Link className={styles.btnStart} href="/projects">
              Start
            </Link>
          </div>
        </div>

        <div className={styles["social-media"]}>
          <a
            href="https://www.linkedin.com/in/louise-peridy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/imgs/socials/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
              className="social-media-img"
            />
          </a>
          <a
            href="https://github.com/LouisePrd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/imgs/socials/github.png"
              alt="github"
              width={30}
              height={30}
              className="social-media-img"
            />
          </a>
          <a href="mailto:louise.peridy22@gmail.com">
            <Image
              src="/imgs/socials/mail.png"
              alt="mail"
              width={30}
              height={30}
              className="social-media-img"
            />
          </a>
          <a
            href="https://www.instagram.com/lwiz.prd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/imgs/socials/insta.png"
              alt="instagram"
              width={30}
              height={30}
              className="social-media-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
