import Image from "next/image";
import DataImage from "@/public/data";
import { LayoutContainer, Wrapper } from "../Template/Layout.Style";

function Home1() {
  return (
    <LayoutContainer>
        <Wrapper>
            <Image src={DataImage.home1} alt="Home1" />
        </Wrapper>
    </LayoutContainer>
  )
}

export default Home1
