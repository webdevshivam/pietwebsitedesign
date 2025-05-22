import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuState, setMobileSubmenuState] = useState({
    about: false,
    academics: false,
    admissions: false,
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubmenu = (submenu: keyof typeof mobileSubmenuState) => {
    setMobileSubmenuState((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+911414071500"
              className="text-sm hover:text-accent-light transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>+91-141-4071500
            </a>
            <a
              href="mailto:info@poornima.org"
              className="text-sm hover:text-accent-light transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i>info@poornima.org
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-sm hover:text-accent-light transition-colors"
            >
              Alumni
            </a>
            <a
              href="#"
              className="text-sm hover:text-accent-light transition-colors"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-sm hover:text-accent-light transition-colors"
            >
              NIRF
            </a>
            <a
              href="#"
              className="text-sm hover:text-accent-light transition-colors"
            >
              NBA
            </a>
            <div className="flex space-x-3 ml-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-accent-light transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-accent-light transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-accent-light transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-accent-light transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-accent-light transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div>
              <h1 className="text-primary font-heading font-bold text-2xl md:text-3xl leading-tight">
                Poornima Institute of
              </h1>
              <h2 className="text-secondary font-heading font-semibold text-xl md:text-2xl leading-tight">
                Engineering & Technology
              </h2>
              <p className="text-xs text-neutral-700">
                Affiliated to RTU, Kota • Approved by AICTE & UGC under 2(f) •
                Accredited by NAAC
              </p>
            </div>
          </div>

          <div className="flex mt-4 md:mt-0">
            <Link
              href="/apply"
              className="btn-secondary mr-3 rounded-lg shadow-md hover-lift"
            >
              <i className="fas fa-graduation-cap mr-2"></i> Apply Now
            </Link>
            <button
              className="block md:hidden text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-primary hidden md:block">
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row justify-center">
            <li className="group relative">
              <Link
                href="/"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-home mr-2"></i>Home
              </Link>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-university mr-2"></i>About
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/about"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-info-circle mr-2"></i>About PIET
                </Link>
                <Link
                  href="/vision"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-eye mr-2"></i>Vision & Mission
                </Link>
                <Link
                  href="/leadership"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>Leadership
                </Link>
                <Link
                  href="/infrastructure"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-building mr-2"></i>Infrastructure
                </Link>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-book-open mr-2"></i>Academics
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/departments"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-sitemap mr-2"></i>Departments
                </Link>
                <Link
                  href="/programs"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-graduation-cap mr-2"></i>Programs Offered
                </Link>
                <Link
                  href="/calendar"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>Academic Calendar
                </Link>
                <Link
                  href="/examination"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-clipboard-check mr-2"></i>Examination
                </Link>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-user-graduate mr-2"></i>Admissions
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/admission-process"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-clipboard-list mr-2"></i>Admission
                  Process
                </Link>
                <Link
                  href="/eligibility"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-check-circle mr-2"></i>Eligibility
                </Link>
                <Link
                  href="/fee-structure"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-rupee-sign mr-2"></i>Fee Structure
                </Link>
                <Link
                  href="/scholarships"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-award mr-2"></i>Scholarships
                </Link>
              </div>
            </li>
            <li className="group relative">
              <Link
                href="/research"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-flask mr-2"></i>Research
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/placements"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-briefcase mr-2"></i>Placements
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/campus-life"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-coffee mr-2"></i>Campus Life
              </Link>
            </li>
            <li className="group relative">
              <Link
                href="/contact"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-envelope mr-2"></i>Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`bg-white shadow-xl md:hidden rounded-b-lg ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="px-4">
          <li>
            <Link href="/">
              <a className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors">
                Home
              </a>
            </Link>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("about")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.about ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.about ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  About PIET
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Infrastructure
                </a>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                Academics
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("academics")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.academics ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.academics ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Programs Offered
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Academic Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Examination
                </a>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                Admissions
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("admissions")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.admissions ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.admissions ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Admission Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Eligibility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Fee Structure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Scholarships
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors"
            >
              Research
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors"
            >
              Placements
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors"
            >
              Campus Life
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
