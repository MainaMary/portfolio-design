import SubTitle from "../components/SubTitle";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certification from "../components/Certification";
import { skillsData } from "../data/skills-data";
import { toolsData } from "../data/skills-data";
import Profile from "../assets/profile.jpeg";
import { currentYear } from "../utils/date";
const About = () => {
  return (
    <div className="max-w-[1280px] m-auto p-3">
      <section className="flex">
        <div className="w-[70%]">
          <h2 className="text-3xl font-semibold">Ola Ategun</h2>
          <h3 className=" text-slate text-2xl ">Product designer</h3>
          <p className="my-12 text-base">
            I'm Ola, a Product designer living in Canada. With a solid 3+ years
            in the field,I am a passionate about crafting designs that bring
            dieas to life in a user-friendly way. Beyond my design journey
            you'll always find me exploring the realms of art and technology.
            Let's collaborate and make things great.
          </p>
          <p>
            I thrive on bridging creativity and functionality to create
            memorable user experiences. When I am not immersed in design, you
            can catch me savoring delicious foods or seeking inspiration in the
            world around me. Let's connect and embark on a design adventure.
          </p>
        </div>
        <div className="w-[30%] flex justify-end">
          <img src={Profile} alt="img" className="w-[200px] h-[200px]" />
        </div>
      </section>
      <section className="my-16">
        <SubTitle>Skills</SubTitle>
        <Skills items={skillsData} />
      </section>
      <section className="my-16">
        <SubTitle>Tools</SubTitle>
        <Skills items={toolsData} />
      </section>
      <section className="my-16">
        <SubTitle>Experience</SubTitle>
        <Experience />
      </section>
      <section>
        <SubTitle>Education</SubTitle>
        <Education />
      </section>
      <section>
        <SubTitle>Certification</SubTitle>
        <Certification />
      </section>
      <p>{`@${currentYear()}  Ola Ategun`}</p>
    </div>
  );
};

export default About;
