import Image from "next/image";
import Link from "next/link";
import styles from "./Audiovisual.module.css";

export default function Audiovisual() {
  return (
    <main className={styles["main-content"]}>
      <h1 className="sub-title">Audiovisual Projects</h1>

      <h2 className={styles.title}>Le Making-Of Sauvage</h2>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>THEME & REALIZATION</h3>
        <p>
          As part of our audiovisual course during the first semester of our
          first year at IMAC, we had to produce a group short film, averaging
          ten minutes. Originally, we considered following two different groups,
          but we eventually decided to focus on just one, as the content was
          rich and provided plenty of material very quickly. The challenge was
          significant because nothing was scripted, and we had to adapt to every
          situation. Our own scenario was built progressively during the filming
          process.
          <br />
          <br />
          We embedded ourselves in their filming sessions, rehearsals, and
          meetings to gather as much content as possible. We also conducted
          interviews with the group members to capture their perspective on the
          project. Our group consisted of 3 students, and we edited the film
          using Adobe Premiere Pro.
        </p>
      </div>
      <div className={styles.container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MTOJBfGEMDM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>

      <h2 className={styles.title}>
        The Great Worldw
        <b>
          <u>AI</u>
        </b>
        de Conspiracy
      </h2>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>THEME & REALIZATION</h3>
        <p>
          Theme: Truth
          <br />
          Sub-theme: Transhumanism
          <br />
          Subject: Is our judgment always well-founded? Who holds the truth? Are
          we not all someone else's "ignorant person"?
          <br />
          <br />
          Edited on Premiere Pro and directed by a group of 4 students, the
          objective of this short film was to present a team of journalists
          convinced they know the truth: this world is ruled by artificial
          intelligence. Every human possesses gadgets that control their
          thoughts via an algorithm that chooses the "best" and most "optimized"
          way to live one's life according to a defined norm. The world is
          completely unaware of this governance.
          <br />
          <br />
          External Point of View
          <br />
          We play conspiracy theorist characters filming a documentary to reveal
          to the world that they are actually controlled by AI. Except for us,
          none of the actors were aware that it was a staged performance.
          <br />
          <br />
          Organization of Ideas
          <br />
          At the end, we discover a second film crew making a documentary about
          the conspiracy theorists we had been following from the start. This
          crew is convinced they've played a trick on them and are mocking them,
          but they, too, are being filmed by an algorithm.
        </p>
      </div>
      <div className={styles.container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IBDxAvLOofQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>

      <h2 className={styles.title}>Newton's Binomial</h2>
      <div className={`${styles.container} ${styles.mix}`}>
        <h3 className={styles.subtitle}>MIXING</h3>
        <p>
          The year at IMAC was very productive, and during the second semester,
          we had the opportunity to work on audio creation and mixing. For this
          project, we were tasked with creating a sound mix from a simplified
          multitrack version of Michael Jackson's Off The Wall, separated into
          23 tracks. From there, we had free rein: cutting, reorganizing,
          playing with volume, effects, echoes, reverbs, etc. Here is the result
          of our work, created using ProTools.
        </p>
        <div className={styles.videoWrapper}>
          <p className={styles["ecoute-text"]}>Enjoy listening!</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WDdG63w81rQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
      </div>

      <h2 className={styles.title}>Black Mirror: Reconnection</h2>
      <div className={styles.container}>
        <div className="left-container">
          <h3 className={styles.subtitle}>SUBJECT</h3>
          <p>
            As part of a course called "Application Production Methodology," we
            had to produce a synopsis inspired by the famous Netflix series
            Black Mirror. This episode had to blend ethics and computer science,
            and I chose to work on the theme of the metaverse and artificial
            intelligence. The episode is titled "Reconnection".
          </p>
          <h3 className={styles.subtitle}>WORK DONE</h3>
          <p>
            We had to write a three-act synopsis and produce a teaser in any
            form. I chose to create a video teaser, various poster prototypes,
            and a potential casting list.
          </p>
        </div>

        <div className="right-container">
          <h3 className={styles.subtitle}>EXPLANATION</h3>
          <p>
            The goal of this scenario was to prompt reflection on our identity
            in the online space and the role we will give to artificial
            intelligence in the coming years. In this fictional episode, we
            follow a young man in his thirties whose identity is stolen by an AI
            in the metaverse. He falls into a blind rage, ready to do anything
            to eliminate his avatar.
            <br />
            <br />
            The teaser gives a glimpse of the metaverse through an interview
            with Facebook's General Manager, Laurent Solly, and introduces the
            inciting incident with a VR headset followed by an interview with
            the company's customer service. Classmates lent their voices for the
            acting.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          <p className={styles["link-synopsis"]}>
            You can find the french synopsis
            <a
              className={styles.link}
              href="https://drive.google.com/file/d/1xAzSFQz5UXbIEEVPVjR_NfXK22VLxO8_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; here
            </a>
            .
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jJwCwAOMsws"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.iframe}
          ></iframe>
        </div>
      </div>

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
          alt="Palais de Tokyo"
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

      <a className={styles.ancre} href="#btnProject">
        ↑ Back to top
      </a>
    </main>
  );
}
