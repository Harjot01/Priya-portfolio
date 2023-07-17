import React from "react";
import dynamic from "next/dynamic";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const Carousel = dynamic(() => import("react-multi-carousel"));
import "react-multi-carousel/lib/styles.css";
import Fade from "react-reveal/Fade";

const Certificates = ({ CertificatesGallery }) => {
  const client = createClient({
    projectId: "b4bintk8",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // Number of slides to slide at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  let count = 0

  return (
    <div className="section py-16" id="certificates">
      {/* <h2 className="text-center text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My Certificates
      </h2> */}
      <h4 className="text-primary pt-6 text-center text-xl font-bold sm:text-3xl lg:text-4xl">
        Check out my certificates
      </h4>
      <div className="container mx-auto py-10 md:py-20 md:-mb-20 ">
        <div className="grid md:grid-cols-3">
          
            {CertificatesGallery.map((items, index) => (
              <Fade top distance="20%" duration={1500} delay={count+=200}>
              <div className="my-1 px-1 w-full lg:my-4 lg:px-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <a href="">
                    <img
                      alt="Placeholder"
                      className="block h-auto w-full"
                      src={`${builder.image(items.certificateImg).url()}`}
                      key={index}
                    />
                  </a>
                  <header className="flex items-center bg-transparent justify-center leading-tight p-2">
                    <h1 className="text-lg">
                      <p className="no-underline">{items.title}</p>
                    </h1>
                  </header>
                </div>
              </div>
          </Fade> 
            ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
