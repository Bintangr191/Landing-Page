import Image from "next/image";
import DataImage from "@/public/data";
import { LayoutContainer, Wrapper } from "../Template/Layout.Style";

function About() {
  return (
    <LayoutContainer>
        <Wrapper>
            <Image src={DataImage.about} alt="about" />
        </Wrapper>
    </LayoutContainer>
  )
}

export default About