import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from "../../variants";
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

const Brands = ({Home}) => {
  const client = createClient({
    projectId: "b4bintk8",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  return (
    <section className='min-h-[12vh] bg-primary flex items-center'>
    <motion.div
    variants={fadeIn("right", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.7 }}
     className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {Home.map((items) =>{
          return (
            items.brands.map((elt)=>{
              return <img src={`${builder.image(elt).url()}`} alt=""/>
            })
            )
        })}
    </motion.div>
    </section>
  )
};

export default Brands
