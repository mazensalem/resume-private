import Contact from "./Contact";
import ProgramingLang from "./ProgramingLang";
import Section from "./Section";
import Skills from "./Skills";
export default function Main() {
  return (
    <div className="w-screen flex flex-col md:w-2/4 h-auto md:float-right">
      <Section
        title={"ALL ABOUT ME"}
        description={
          "My name is mazen salem and iam a self-taught web developer and i love designing and coding websites"
        }
      />
      <Skills />
      <Contact />
      <ProgramingLang />
    </div>
  );
}
