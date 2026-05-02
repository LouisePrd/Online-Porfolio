"use client";

import styles from "./Professional.module.css";

export default function ProfessionalExperiences() {
  return (
    <main className={styles.mainContent}>
      <h1 className="sub-title">Professional Experiences</h1>

      <div className={styles.centralContainer}>
        {/* Experience 1: Limpide */}
        <section
          className={styles.contentCard}
          style={{ animationDelay: "0.1s" }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.dateBadge}>March 2026 — Sept. 2026</span>
            <span className={styles.location}>📍 Prague, CZ • On-site</span>
          </div>
          <h2 className={styles.companyTitle}>Limpide.net</h2>
          <h3 className={styles.roleTitle}>Fullstack Developer (Internship)</h3>
          <div className={styles.bodyText}>
            <ul className={styles.list}>
              <li>
                <strong>Back-end & Data:</strong> Architecture of{" "}
                <strong>CMS solutions</strong>.
              </li>
              <li>
                <strong>Front-end & UI:</strong> Redesign and optimization for
                performance and <strong>UI/UX</strong>.
              </li>
              <li>
                <strong>Design:</strong> Integration of new features and update
                of the showcase website.
              </li>
            </ul>
          </div>
          <div className={styles.techStack}>
            {["React", "Next.js", "Node.js", "UI/UX"].map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Experience 2: prewatch-lab */}
        <section
          className={styles.contentCard}
          style={{ animationDelay: "0.2s" }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.dateBadge}>
              April 2025 — Jan. 2026 (10 months)
            </span>
            <span className={styles.location}>📍 Paris, FR • Hybrid</span>
          </div>
          <h2 className={styles.companyTitle}>prewatch-lab</h2>
          <h3 className={styles.roleTitle}>
            WebGL Developer (Freelance & Internship)
          </h3>
          <div className={styles.bodyText}>
            <p className={styles.description}>
              <em>
                Interactive 3D visualization web service based on{" "}
                <strong>Gaussian Splatting (3DGS)</strong>.
              </em>
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Development:</strong> Created UI tools for dynamic 3D
                interaction and model customization.
              </li>
              <li>
                <strong>Infrastructure:</strong> Database architecture and{" "}
                <strong>Next.js Dashboard</strong> integration.
              </li>
              <li>
                <strong>CI/CD:</strong> Automated <strong>PlayCanvas</strong>{" "}
                synchronization via GitHub Actions.
              </li>
              <li>
                <strong>Research:</strong> Implemented immersive visualization
                and <strong>Virtual Reality (VR)</strong> features.
              </li>
            </ul>
          </div>
          <div className={styles.techStack}>
            {["WebGL", "3DGS", "PlayCanvas", "VR", "GitHub Actions"].map(
              (tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>

        {/* Experience 3: Point.P */}
        <section
          className={styles.contentCard}
          style={{ animationDelay: "0.3s" }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.dateBadge}>Sept. 2022 — Aug. 2023</span>
            <span className={styles.location}>
              📍 Courbevoie, FR • Apprenticeship
            </span>
          </div>
          <h2 className={styles.companyTitle}>POINT.P - SGDB France</h2>
          <h3 className={styles.roleTitle}>Assistant Web Project Lead</h3>

          <div className={styles.bodyText}>
            <h4 className={styles.categoryTitle}>Webmastering</h4>
            <ul className={styles.list}>
              <li>
                Web page development and layout integration for Point.P and
                affiliated brands.
              </li>
              <li>
                Managed content updates and integration of new visual assets.
              </li>
            </ul>

            <h4 className={styles.categoryTitle}>Digital Marketing</h4>
            <ul className={styles.list}>
              <li>
                Led email campaigns and web animations for sales operations and
                events.
              </li>
              <li>
                Executed test campaigns via <strong>AB Tasty</strong> and
                handled performance reporting.
              </li>
            </ul>
          </div>
          <div className={styles.techStack}>
            {["JIRA", "AB Tasty", "Marketing Digital"].map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Experience 4: CARDONNEL Ingénierie */}
        <section
          className={styles.contentCard}
          style={{ animationDelay: "0.4s" }}
        >
          <div className={styles.cardHeader}>
            <span className={styles.dateBadge}>April 2022 — July 2022</span>
            <span className={styles.location}>📍 Lieusaint, FR • On-site</span>
          </div>
          <h2 className={styles.companyTitle}>CARDONNEL Ingénierie</h2>
          <h3 className={styles.roleTitle}>
            Full-stack Developer (Internship)
          </h3>
          <div className={styles.bodyText}>
            <ul className={styles.list}>
              <li>
                <strong>Symfony:</strong> Developed internal business tools for
                building renovation.
              </li>
              <li>
                Created a custom <strong>ticket tracking system</strong> to
                optimize internal organization.
              </li>
              <li>
                Handled bug fixes, UI adjustments, and database management.
              </li>
            </ul>
          </div>
          <div className={styles.techStack}>
            {["Symfony", "PHP", "SQL"].map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
      <a
        className="ancre"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Back to top
      </a>
    </main>
  );
}
