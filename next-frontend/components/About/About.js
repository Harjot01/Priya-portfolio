import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../../variants";
import { createClient } from 'next-sanity';
import { motion } from 'framer-motion'
import imageUrlBuilder from '@sanity/image-url'
import PortableText from "react-portable-text"

import { FaGithub, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa';



const About = ({ Bio }) => {
  const client = createClient({
    projectId: "b4bintk8",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  return (
    <section className='section bg-primary/[.03]' id='about'>
      <div className='container mx-auto pt-20'>
        <div className='flex flex-col xl:flex-row gap-24 2xl:mx-28'>


          {Bio.map((items) => {
            return <motion.img
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className='object-cover h-[250px] md:h-[450px]  w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={`${builder.image(items.authorimage).url()}`}>

            </motion.img>
          })}

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl text-primary lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>Priya
              </h2>

          {Bio.map((items)=>{

            
            return <TypeAnimation
            sequence={[
              `${items.roles[0]}`,
              2000,
              `${items.roles[1]}`,
              2000
              
              
            ]}
            speed={50}
            className="text-primary text-xl"
            wrapper="p"
            repeat={Infinity}
            
            />
          })}

              <hr className='mb-8 opacity=5' />
              {Bio.map((items) => {

                return <div className='mb-8 sm:text-xl text-lg'>
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    content={items.content}
                    projectId="b4bintk8"
                    dataset="production"
                    // Optionally override marks, decorators, blocks, etc. in a flat
                    // structure without doing any gymnastics
                    serializers={{
                      h1: (props) => <h1 style={{ color: "black" }} {...props} />,
                      li: ({ children }) => <li className="special-list-item">{children}</li>,
                    }}
                  />
                </div>
              })}

            </div>
            {/* <button className='btn btn-md bg-primary transition-all'>
              Contact Me
            </button> */}

            {Bio.map((items) => {

              return <div className="flex justify-center mt-5 space-x-5 text-gray-400 ">
                <a className='text-[25px] hover:text-primary'
                  href={`${items.github}`}
                  target='_blank'
                  rel="noopener">
                  <span className="sr-only">Github</span>
                  <FaGithub />
                </a>
                <a className='text-[25px] hover:text-primary'
                  href={`${items.instagram}`}
                  target='_blank'
                  rel="noopener">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram />
                </a>
                <a className='text-[25px] hover:text-primary'
                  href={`${items.linkedin}`}
                  target='_blank'
                  rel="noopener">
                  <span className="sr-only">Linkedin</span>
                  <FaLinkedin />
                </a>
                <a className='text-[25px] hover:text-primary'
                  href={`${items.snapchat}`}
                  target='_blank'
                  rel="noopener">
                  <span className="sr-only">Snapchat</span>
                  <FaSnapchat />
                </a>
              </div>
            })}
          </motion.div>

        </div>





      </div>



    </section>
  )
}



export default About
