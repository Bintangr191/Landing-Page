import Image from "next/image";
import images from "@/public/data";
import { LayoutContainer, Wrapper } from "../Template/Layout.Style";

function About() {
  return (
    <LayoutContainer>
        <Wrapper>
            <Image src={images.about} alt="about" />
        </Wrapper>
    </LayoutContainer>
  )
}

export default About