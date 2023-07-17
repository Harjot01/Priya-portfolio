import Head from "next/head";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero/Hero"));
const Navbar = dynamic(() => import("../components/Navbar/navbar"));
const Footer = dynamic(() => import("../components/footer"));
const Brands = dynamic(() => import("../components/Hero/Brands"));
const About = dynamic(() => import("../components/About/About"));
const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"));
const Blog = dynamic(() => import("../components/blog"));
const ScrollToTop = dynamic(() => import("../components/ScrollToTop"));
const Contact = dynamic(() => import("../components/Contact"));
const Resume = dynamic(() => import("../components/resume/Resume"));
import { createClient } from "next-sanity";

const Home = ({
  Home,
  Blogs,
  Bio,
  ProjectGallery,
  CertificatesGallery,
  EducationAndExperience,
  MySkills,
}) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Hi my name is Priya Yadav, welcome to my portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Icons scout */}
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        ></link>

        {/* Google fonts */}
      </Head>

      <Navbar />
      <Hero Home={Home} />
      <Brands Home={Home} />
      <About Bio={Bio} />
      <Portfolio ProjectGallery={ProjectGallery} />
      <Resume
        EducationAndExperience={EducationAndExperience}
        MySkills={MySkills}
        CertificatesGallery={CertificatesGallery}
      />
      {/* <Certificates CertificatesGallery={CertificatesGallery} /> */}
      <Blog Blogs={Blogs} />
      <Contact />
      <Footer Bio={Bio} />
      <ScrollToTop />
    </>
  );
};

export async function getStaticProps(context) {
  const client = createClient({
    projectId: "b4bintk8",
    dataset: "production",
    useCdn: false,
  });

  const HomeQuery = `*[_type == "home"]`;
  const Home = await client.fetch(HomeQuery);

  const BioQuery = `*[_type == "about"]`;
  const Bio = await client.fetch(BioQuery);

  const ProjectsQuery = `*[_type == "projects"]`;
  const ProjectGallery = await client.fetch(ProjectsQuery);

  const BlogsQuery = `*[_type == "blog"][0...3]`;
  const Blogs = await client.fetch(BlogsQuery);

  const CertificatesQuery = `*[_type == "certificates"]`;
  const CertificatesGallery = await client.fetch(CertificatesQuery);

  const EducationQuery = `*[_type == "educationbackground"]`;
  const EducationAndExperience = await client.fetch(EducationQuery);

  const SkillsQuery = `*[_type == "skills"]`;
  const MySkills = await client.fetch(SkillsQuery);

  return {
    props: {
      Home,
      Bio,
      ProjectGallery,
      Blogs,
      CertificatesGallery,
      EducationAndExperience,
      MySkills,
    },

    revalidate: 5
  };
}

export default Home;
