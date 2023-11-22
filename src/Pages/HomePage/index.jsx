import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { Profile } from "../../Profile";
import { Projects } from "../../Projects";
import { Section } from "../../Section";
import { Contact } from "../../SectionContact";
import { Skills } from "../../Skills";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Section />
      <Profile />
      <Contact />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};
