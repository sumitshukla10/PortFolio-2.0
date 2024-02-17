import { FaGithub, FaLinkedin,FaInstagram } from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
export default function MainSection(){
    return(
        <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-sky-400 mr-12 mb-2">
            Welcome to My Portfolio
            </h2>
            <p className="text-sm md:text-lg text-white mb-4 w-fit
            ">
              I am a dedicated third-year student at Guru Gobind Singh Indraprastha University, pursuing a Bachelor of Technology in Information Technology. With a fervent passion for technology and a drive for excellence, I have immersed myself in the world of full-stack development. My journey thus far has seen me undertake numerous challenges, honing my problem-solving skills along the way. Through a diverse range of projects, particularly within the MERN stack, I've gained invaluable hands-on experience in crafting robust and scalable web applications. Committed to continuous learning and growth, I strive to leverage my academic knowledge and practical expertise to make meaningful contributions in the field of technology
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/sumitshukla10"
                className="text-white hover:text-sky-700 transition duration-300"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-shukla-5aa09624b"
                className="text-white hover:text-sky-700 transition duration-300"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/sumitshukla1001?igsh=NHd1eTBrNGV5eXRn"
                className="text-white hover:text-sky-700 transition duration-300"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="mailto:9910sumitshukla@example.com"
                className="text-white hover:text-sky-700 transition duration-300"
              >
                <GrMail className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}