import styles from "./CV.module.css";

export default function CVPage() {
  return (
    <main className={styles.mainContent}>
      <h1 className="sub-title">Curriculum vitae</h1>

      <div className={styles.download}>
        <p>
          You can download my CV in PDF format by clicking{" "}
          <a href="/imgs/socials/CV-PERIDY_Louise.pdf" download>
            this link
          </a>.
          <br />
          Or the minimalist version here:{" "}
          <a href="/imgs/socials/Internationnal-CV.pdf" download>
            this link
          </a>.
        </p>
      </div>

      <div className={styles.cvContainer}>
        <embed
          src="/imgs/socials/CV-PERIDY_Louise.pdf#view=Fit"
          type="application/pdf"
          className={styles.cvPdf}
        />
      </div>
    </main>
  );
}