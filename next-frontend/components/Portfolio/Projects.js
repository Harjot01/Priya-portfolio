import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
const Project = dynamic(()=>import("./Project"))


const Projects = ({ProjectGallery}) => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        // get projects based on item
        if (item.name === 'all') {
            {ProjectGallery.map((items)=>{
                setProjects(items.projectdata);
            })}
        } 
        else {
            {ProjectGallery.map((items)=>{
                const newProjects = items.projectdata.filter((project) => {
                    return project.category.toLowerCase() === item.name;
                });
                setProjects(newProjects);
            })}
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() }
        
        )
        setActive(index);
    }

    let count = 0.1


    return (
        <div>
            <nav className='mb-12 max-w-xl mx-auto'>
                    {ProjectGallery.map((items) => {
                        return <ul className='flex flex-col md:flex-row justify-evenly items-center text-black'>
                            {items.navigation.map((item, index)=>{
                                return <li className={`${active === index ? 'active text-white ' : 'text-primary hover:bg-primary hover:text-white bg-white '} border-[1px] border-primary px-8 py-2 text-lg text-center  bg-primary rounded-3xl cursor-pointer capitalize m-4`}
                                key={index} onClick={(e)=>{
                                    handleClick(e, index);
                                }}>{item}</li>
                            })}
                        </ul>
                    })}
                
            </nav>
            {/* Projects grid */}
            <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
                {projects.map((item) => {
                    return <Project item={item} counter={count += 300} />
                })}
            </section>
        </div>
    )
}

export default Projects
