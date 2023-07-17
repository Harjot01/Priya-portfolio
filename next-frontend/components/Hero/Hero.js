import dynamic from "next/dynamic";
const Container = dynamic(()=>import("../container"))
// import Container from "./container";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../../variants";
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'




const Hero = ({ Home }) => {
  const client = createClient({
    projectId: "b4bintk8",
    dataset: "production",
    useCdn: false
  });

  const projectId = "b4bintk8";
  const dataset="production"
  const builder = imageUrlBuilder(client)




  return (
    <>
      <div className="dark:bg-dark" id="home">



        <Container className="flex pt-24 flex-wrap justify-center sm:mt-0">



          <div className="flex items-center justify-center w-full lg:h-[73vh] lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <motion.h3
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className=" font-semibold pb-8 sm:pb-0 text-center md:text-start text-[2rem] mx-1 leading-[1]"
              >
                Hello, my name
              </motion.h3>
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className=" text-[3rem] md:text-[5rem] leading-[1] sm:leading-normal  font-bold text-center md:text-start"
              >
                PRIYA YADAV
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className="mb-6 text-2xl lg:text-4xl font-secondary font-semibold uppercase leading-[3] md:leading-[1] text-center md:text-start"
              >
                {Home.map((items) => {



                  {/* <span className="text-black mr-3">I am a</span> */ }
                  return <TypeAnimation

                    sequence={[
                      `${items.roles[0]}`,
                      2000,
                      `${items.roles[1]}`,
                      2000,
                      `${items.roles[2]}`,
                      2000,

                    ]}
                    speed={50}
                    className="text-primary"
                    wrapper="span"
                    repeat={Infinity}
                  />
                })}
              </motion.div>
              {Home.map((items) => {


                return <motion.p
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="mb-8 text-[20px] text-gray-500 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 hidden sm:flex"
                >
                  {items.tagline}
                </motion.p>
              })}
              {Home.map((items) => {
                 const [_file, id, extension] = items.downloadcv.asset._ref.split('-');
                return <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="flex mt-2 flex-col items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row"
                >



                  <a
                    href={`https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`} target="_blank"
                    rel="noopener"
                    className="px-6 py-2 text-lg text-center text-white bg-primary rounded-md "
                  >
                    Download CV
                  </a>
                 

                  <a
                    href={`${(items.githuburl)}`}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <svg
                      role="img"
                      width="24"
                      height="24"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span> Repositories</span>
                  </a>



                </motion.div>
              })}


              {/* <div className="">
                <h2 className="text-base uppercase font-sans mb-4 ">
                  Find me in
                </h2>
              </div> */}
            </div>
          </div>


          <div className="flex items-center justify-center w-full lg:w-1/2 xl:-mx-8">
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="flex items-center justify-center"
              viewport={{ once: true, amount: 0.7 }}
            >
              {Home.map((items) => {


                return <div
                  className="author-img xl:h-[32rem] xl:w-[32rem]  md:h-[25rem] md:w-[25rem] h-[17rem] w-[17rem] rounded-full bg-cover mb-2"
                  style={{
                    backgroundImage: `url(${builder.image(items.authorimage).url() || '/assets/img/post-01.png'})`,
                  }}
                ></div>
              })}
            </motion.div>
          </div>
        </Container>


      </div>


    </>
  );
};

export default Hero;
