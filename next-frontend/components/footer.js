import Link from "next/link";
import React from "react";
import Container from "./container";
import {
  FaGithub,
  FaInstagram,
  FaLine,
  FaLinkedin,
  FaSnapchat,
} from "react-icons/fa";

export default function Footer({ Bio }) {
  const navigation = ["Home", "About", "Projects", "Certificates", "Blogs"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative bg-opacity-5">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100"
              >
                {/* <Image
                      src="/img/logo.svg"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    /> */}
                <span>Priya</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Welcome to my portfolio website, where I merge my passion for
              technology and creativity to craft digital experiences that leave
              a lasting impact. As a developer, I thrive on transforming
              innovative ideas into elegant and functional solutions.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-primary focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-primary focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Follow me</div>
            {Bio.map((items) => {
              return (
                <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                  <a
                    className="text-[25px] hover:text-primary"
                    href={`${items.github}`}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only">Github</span>
                    <FaGithub />
                  </a>
                  <a
                    className="text-[25px] hover:text-primary"
                    href={`${items.instagram}`}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram />
                  </a>
                  <a
                    className="text-[25px] hover:text-primary"
                    href={`${items.linkedin}`}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only">Linkedin</span>
                    <FaLinkedin />
                  </a>
                  <a
                    className="text-[25px] hover:text-primary"
                    href={`${items.snapchat}`}
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only">Snapchat</span>
                    <FaSnapchat />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Designed and Developed by{" "}
          <a href="https://priyadv.me" target="_blank" rel="noopener">
            Priya Yadav
          </a>{" "}
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Backlink = () => {
  return <div></div>;
};
