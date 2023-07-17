import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const Blog = ({ Blogs }) => {
  const client = createClient({
    projectId: "b4bintk8",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  let count = 0;
  return (
    <div className=" bg-secondary dark:bg-dark py-16 md:py-32" id="blogs">
      <div className="container mx-auto">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          I also like to write
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium sm:text-2xl lg:text-3xl mb-16 lg:mb-24">
          Check out my latest posts!
        </h4>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 py-10 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          {Blogs.map((item) => {
            return (
              <Link
                href={`${item.blogurl}`}
                className="transition-all hover:scale-105"
              >
                <Fade top distance="20%" duration={1500} delay={(count += 300)}>
                  <div className="max-w-lg mx-auto ">
                    <div className="bg-secondary dark:bg-dark shadow-2xl rounded-lg max-w-md mb-5">
                      <img
                        className="rounded-t-lg"
                        src={`${
                          builder
                            .image(item.blogimage)
                            .width(500)
                            .height(290)
                            .url() || "/assets/img/post-01.png"
                        }`}
                        alt=""
                      />

                      <div className="p-5">
                        <h5 className="font-bold text-2xl tracking-tight mb-2">
                          {item.title}
                        </h5>

                        <p className="font-normal  mb-3">{item.metadesc}</p>
                        <button className="text-white bg-primary hover:bg-opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </Fade>
              </Link>
            );
          })}
        </div>
        <Fade top distance="20%" duration={1500} delay={1000}>
          <div className="flex items-center justify-center pt-10 md:-mb-12">
            <a
              href="../blogs"
              rel="noopener"
              className="px-8 py-2 text-lg text-center text-white bg-primary rounded-md "
            >
              More Blogs
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Blog;
