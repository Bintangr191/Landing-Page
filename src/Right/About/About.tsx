import Image from "next/image";
import DataImage from "@/public/data";
import { AboutContainer, About1 } from "./About.Style";

function About() {
  return (
    <AboutContainer>
        <About1>
            <Image src={DataImage.about} alt="about" />
        </About1>
    </AboutContainer>
  )
}

export default About
