import { BG_IMG, IMG } from "../utils/constants";
import Header from "./Header";
import MainSection from "./MainSection";
import Name from "./Name";
import Resume from "./Resume";
import SkillSection from "./SkillSection";
import Project from './Project'
import ContactForm from "./ContactForm";
// import Footer from "./Footer";


export default function Body() {
  return (
    <div className="">
      <Header />
      <div className="relative h-screen">
        <img
          className=" h-screen md:w-screen aspect-video"
          alt="bg_imag"
          src={BG_IMG}
        />
        <div className="absolute top-[2%] w-screen md:h-full flex justify-center items-center flex-col">
          <Name/>
          <MainSection/>
          <div className="-mt-2 md:m-0">
          <Resume/>
        </div>
        </div>
        <div className="mb-[100%] md:mb-0"><SkillSection/></div>
        <div className="absolute mt-12 md:mt-[20%]"><Project/></div>
      </div>
    </div>
  );
}
