import Image from "next/image";
import styles from "./Audiovisual.module.css";

export default function Audiovisual() {
  return (
    <main className={styles["main-content"]}>
      <h1 className="sub-title" id="top">
        Audiovisual Projects
      </h1>
      <section className={styles.projectSection}>
        <h2 className={styles.title}>Le Making-Of Sauvage</h2>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>THEME & REALIZATION</h3>
            <p>
              As part of our audiovisual course during the first semester of our
              first year at IMAC, we produced a group short film. The challenge
              was significant because nothing was scripted; we had to adapt to
              every situation.
            </p>
            <p>
              We embedded ourselves in filming sessions and rehearsals to gather
              as much content as possible. Edited using Adobe Premiere Pro.
            </p>
          </div>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/MTOJBfGEMDM"
              title="Le Making-Of Sauvage"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.projectSection}>
        <h2 className={styles.title}>
          The Great Worldw
          <b>
            <u>AI</u>
          </b>
          de Conspiracy
        </h2>
        <div className={styles.container}>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/IBDxAvLOofQ"
              title="AI Conspiracy"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>THEME & REALIZATION</h3>
            <p>
              <b>Theme:</b> Truth | <b>Sub-theme:</b> Transhumanism <br />
              The objective was to present journalists convinced the world is
              ruled by AI via thought-controlling algorithms.
            </p>
            <p>
              We played conspiracy theorists filming a documentary. At the end,
              a second film crew is revealed to be filming the first, creating a
              loop of observation.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.projectSection}>
        <h2 className={styles.title}>Newton's Binomial</h2>
        <div className={`${styles.container} ${styles.mix}`}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>MIXING</h3>
            <p>
              Creation of a sound mix from a simplified multitrack version of
              Michael Jackson's
              <i> Off The Wall</i>. We had free rein on effects, echoes, and
              reverbs using ProTools.
            </p>
            <p className={styles.enjoyText}>Enjoy listening! ↓</p>
          </div>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/WDdG63w81rQ"
              title="Newton's Binomial"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.projectSection}>
        <h2 className={styles.title}>Black Mirror: Reconnection</h2>
        <div className={styles.container}>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/jJwCwAOMsws"
              title="Black Mirror Teaser"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>SUBJECT & WORK</h3>
            <p>
              A synopsis inspired by Black Mirror blending ethics and the
              metaverse. Produced a three-act synopsis, a video teaser, and
              casting prototypes.
            </p>
            <p>
              We follow a man whose identity is stolen by an AI in the
              metaverse, leading to a blind rage.
            </p>
            <a
              className={styles.link}
              href="https://drive.google.com/file/d/1xAzSFQz5UXbIEEVPVjR_NfXK22VLxO8_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the French synopsis here →
            </a>
          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <h2 className={styles.title}>Photography</h2>
      <div className={styles["photo-container"]}>
        <Image
          src="/imgs/projects/photo/metro.jpg"
          alt="Metro"
          width={400}
          height={300}
        />
        <Image
          src="/imgs/projects/photo/paris.jpg"
          alt="Paris"
          width={400}
          height={300}
        />
        <Image
          src="/imgs/projects/photo/toit.jpg"
          alt="Rooftops"
          width={400}
          height={300}
        />
        <Image
          src="/imgs/projects/photo/palaisTokyo.jpg"
          alt="Palais"
          width={400}
          height={300}
        />
        <Image
          src="/imgs/projects/photo/archi.jpg"
          alt="Architecture"
          width={400}
          height={300}
        />
      </div>

      <a className="ancre" href="#top">
        ↑ Back to top
      </a>
    </main>
  );
}
