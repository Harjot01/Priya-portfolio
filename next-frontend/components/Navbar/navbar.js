import Link from "next/link";
import dynamic from "next/dynamic";
const ThemeChanger = dynamic(() => import("./DarkSwitch"));
import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Disclosure } from "@headlessui/react";

/**
 * React Hook to get the scroll percentage from the page, returns value from 0 to 100
 */
export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    function updateScrollCompletion() {
      // see how much we have scrolled
      const currentProgress = window.scrollY;
      // see how much total scroll is available
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }
    // add scroll event listener
    window.addEventListener("scroll", updateScrollCompletion);

    // remove scroll event listener on umount
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
}

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const completion = useReadingProgress();

  return (
    <div
      className={
        "fixed top-0 w-full  z-30   dark:bg-dark dark:border-body-color/20 dark:bg-opacity-80 bg-opacity-80 transition-all " +
        (scrollActive
          ? " shadow-sticky pt-0 backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "pt-2 ")
      }
    >
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0">
        <span
          id="progress-bar"
          style={{
            transform: `translateX(${completion - 110}%)`,
          }}
          className={`absolute bottom-0 w-[105vw] transition-transform duration-150 h-0.5 bg-primary`}
        />
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100">
                   
                    <span className="font-bold text-3xl" id="logo">
                      PRIYA
                    </span>
                  </span>
                </Link>

                <div className="flex lg:hidden space-x-3">
                  <ThemeChanger />
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-primary focus:text-primary  focus:outline-none dark:text-gray-300 dark:focus:bg-primary"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <LinkScroll
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={600}
                      onSetActive={() => {
                        setActiveLink("home");
                      }}
                      href="/"
                      className={
                        "w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300    dark:focus:bg-primary focus:outline-none" +
                        (activeLink === "home"
                          ? " text-primary animation-active "
                          : " text-black-500 hover:text-primary a")
                      }
                    >
                      Home
                    </LinkScroll>

                    <LinkScroll
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={600}
                      onSetActive={() => {
                        setActiveLink("about");
                      }}
                      href="/"
                      className={
                        "w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 dark:focus:bg-primary focus:outline-none" +
                        (activeLink === "about"
                          ? " text-primary animation-active "
                          : " text-black-500 hover:text-primary a")
                      }
                    >
                      About
                    </LinkScroll>

                    <LinkScroll
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={600}
                      onSetActive={() => {
                        setActiveLink("portfolio");
                      }}
                      href="/"
                      className={
                        "w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 dark:focus:bg-primary focus:outline-none" +
                        (activeLink === "portfolio"
                          ? " text-primary animation-active "
                          : " text-black-500 hover:text-primary a")
                      }
                    >
                      Projects
                    </LinkScroll>

                    <LinkScroll
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={600}
                      onSetActive={() => {
                        setActiveLink("skills");
                      }}
                      href="/"
                      className={
                        "w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 dark:focus:bg-primary focus:outline-none" +
                        (activeLink === "skills"
                          ? " text-primary animation-active "
                          : " text-black-500 hover:text-primary a")
                      }
                    >
                      Resume
                    </LinkScroll>

                    <LinkScroll
                      activeClass="active"
                      to="blogs"
                      spy={true}
                      smooth={true}
                      duration={600}
                      onSetActive={() => {
                        setActiveLink("blogs");
                      }}
                      href="/"
                      className={
                        "w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 dark:focus:bg-primary focus:outline-none" +
                        (activeLink === "blogs"
                          ? " text-primary animation-active "
                          : " text-black-500 hover:text-primary a")
                      }
                    >
                      Blogs
                    </LinkScroll>
                    <LinkScroll
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={600}
                      onSetActive={() => {
                        setActiveLink("contact");
                      }}
                      href="/"
                      className={
                        "w-full px-4 py-2 -ml-4 rounded-md dark:text-gray-300 dark:focus:bg-primary focus:outline-none" +
                        (activeLink === "contact"
                          ? " text-primary animation-active "
                          : " text-black-500 hover:text-primary a")
                      }
                    >
                      Contact
                    </LinkScroll>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-between flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <LinkScroll
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => {
                  setActiveLink("home");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-medium" +
                  (activeLink === "home"
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                Home
              </LinkScroll>
            </li>

            <li className="mr-3 nav__item">
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-medium" +
                  (activeLink === "about"
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                About
              </LinkScroll>
            </li>

            <li className="mr-3 nav__item">
              <LinkScroll
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => {
                  setActiveLink("portfolio");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-medium" +
                  (activeLink === "portfolio"
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                Projects
              </LinkScroll>
            </li>
            <li className="mr-3 nav__item">
              <LinkScroll
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => {
                  setActiveLink("skills");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-medium" +
                  (activeLink === "skills"
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                Resume
              </LinkScroll>
            </li>

            {/* <li className="mr-3 nav__item">
              <LinkScroll
                href="/"
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => {
                  setActiveLink("certificates");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-medium" +
                  (activeLink === "certificates"
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                Certificates
              </LinkScroll>
            </li> */}

            <li className="mr-3 nav__item">
              <LinkScroll
                activeClass="active"
                to="blogs"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => {
                  setActiveLink("blogs");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-medium" +
                  (activeLink === "blogs"
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                Blogs
              </LinkScroll>
            </li>

            <li className="mr-3 nav__item">
              <LinkScroll
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={600}
                onSetActive={() => {
                  setActiveLink("contact");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-medium" +
                  (activeLink === "contact"
                    ? " text-primary animation-active "
                    : " text-black-500 hover:text-primary a")
                }
              >
                Contact
              </LinkScroll>
            </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
