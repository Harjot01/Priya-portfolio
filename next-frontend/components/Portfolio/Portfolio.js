import React from 'react'
import dynamic from 'next/dynamic'
const Projects = dynamic(()=>import("./Projects"))
// import Projects from './Projects'


const Portfolio = ({ProjectGallery}) => {
    return (
        <section id='portfolio' className='section dark:bg-dark min-h-[1400px] '>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className="text-center text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                        Projects
                    </h2>
                    <h4 className="pt-6 text-center text-xl font-medium sm:text-2xl lg:text-3xl mb-16 lg:mb-24">
                        My recent projects
                    </h4>
                </div>
                <Projects ProjectGallery={ProjectGallery}/>
            </div>
        </section>
    )
}

export default Portfolio
