"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/") return null;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => (pathname === path ? styles.active : "");

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          PORTFOLIO<b>.</b>
        </Link>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <Link
            href="/inspirations"
            className={isActive("/inspirations")}
            onClick={closeMenu}
          >
            Inspirations
          </Link>
          <div className={styles.dropdown}>
            <span className={styles.dropdownLabel}>Project Categories ▾</span>
            <div className={styles.dropdownContent}>
              <Link
                href="/projects/it"
                className={isActive("/projects/it")}
                onClick={closeMenu}
              >
                IT Projects
              </Link>
              <Link
                href="/projects/3d"
                className={isActive("/projects/3d")}
                onClick={closeMenu}
              >
                3D Animation
              </Link>
              <Link
                href="/projects/audiovisual"
                className={isActive("/projects/audiovisual")}
                onClick={closeMenu}
              >
                Audiovisual
              </Link>
            </div>
          </div>

          <div className={styles.dropdown}>
            <span className={styles.dropdownLabel}>Experiences ▾</span>
            <div className={styles.dropdownContent}>
              <Link
                href="/experiences/professional"
                className={isActive("/experiences/professional")}
                onClick={closeMenu}
              >
                Professional
              </Link>
              <Link
                href="/experiences/associative"
                className={isActive("/experiences/associative")}
                onClick={closeMenu}
              >
                Associative
              </Link>
              <Link href="/experiences/cv" className={isActive("/experiences/cv")} onClick={closeMenu}>
                Full CV
              </Link>
            </div>
          </div>
        </div>

        {/* Burger Menu */}
        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? styles.cross : ""}></span>
          <span className={isOpen ? styles.cross : ""}></span>
          <span className={isOpen ? styles.cross : ""}></span>
        </button>
      </div>
    </nav>
  );
}
