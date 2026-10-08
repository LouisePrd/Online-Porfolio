"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpen.current) {
        burgerRef.current?.focus();
        wasOpen.current = false;
      }
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !navRef.current) return;

      const focusableElements = navRef.current.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    wasOpen.current = true;
    navRef.current.querySelector("#main-navigation a")?.focus();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (pathname === "/") return null;

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };
  const toggleDropdown = (dropdown) => {
    setOpenDropdown((current) => (current === dropdown ? null : dropdown));
  };
  const isActive = (path) => (pathname === path ? styles.active : "");
  const isCategoryActive = (basePath) =>
    pathname.startsWith(basePath) ? styles.active : "";

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          PORTFOLIO<b>.</b>
        </Link>

        <div
          id="main-navigation"
          className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}
        >
          <Link
            href="/inspirations"
            className={isActive("/inspirations")}
            onClick={closeMenu}
          >
            Inspirations
          </Link>
          <div
            className={`${styles.dropdown} ${
              openDropdown === "projects" ? styles.open : ""
            }`}
          >
            <button
              type="button"
              className={`${styles.dropdownLabel} ${isCategoryActive("/projects")}`}
              onClick={() => toggleDropdown("projects")}
              aria-expanded={openDropdown === "projects"}
              aria-controls="project-links"
            >
              Project Categories ▾
            </button>
            <div id="project-links" className={styles.dropdownContent}>
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
                href="/projects/playground"
                className={isActive("/projects/playground")}
                onClick={closeMenu}
              >
                Playground
              </Link>
            </div>
          </div>

          <div
            className={`${styles.dropdown} ${
              openDropdown === "experiences" ? styles.open : ""
            }`}
          >
            <button
              type="button"
              className={`${styles.dropdownLabel} ${isCategoryActive("/experiences")}`}
              onClick={() => toggleDropdown("experiences")}
              aria-expanded={openDropdown === "experiences"}
              aria-controls="experience-links"
            >
              Experiences ▾
            </button>
            <div id="experience-links" className={styles.dropdownContent}>
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
              <Link
                href="/experiences/cv"
                className={isActive("/experiences/cv")}
                onClick={closeMenu}
              >
                Full CV
              </Link>
            </div>
          </div>
        </div>

        {/* Burger Menu */}
        <button
          type="button"
          ref={burgerRef}
          className={styles.burger}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <span className={isOpen ? styles.cross : ""}></span>
          <span className={isOpen ? styles.cross : ""}></span>
          <span className={isOpen ? styles.cross : ""}></span>
        </button>
      </div>
    </nav>
  );
}
