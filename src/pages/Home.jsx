import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Service from "../components/Service/Service";
import Testimonial from "../components/Testimonial/Testimonial";

import Education from "../components/Education/Education";

import PropTypes from "prop-types";

const Home = ({ dynamicData }) => {
  // const { blogData } = data;

  const {
    experienceData,
    portfolioData,
    heroData,
    aboutData,
    serviceData,
    sliderData,
    contactData,
    footerData,
    educationData,
    blogData,
  } = dynamicData;

  return (
    <>
      <main className="wrapper">
        <Hero data={heroData} />

        <About data={aboutData} />
        <Education data={educationData} />

        <Experience data={experienceData} />

        <Service data={serviceData} />

        <Portfolio data={portfolioData} />
        <Testimonial data={sliderData} />
        <Blog data={blogData} />
        <Contact data={contactData} />
        <Footer data={footerData} />
      </main>
    </>
  );
};

Home.propTypes = {
  isdata: PropTypes.object,
  dynamicData: PropTypes.object,
};

export default Home;
