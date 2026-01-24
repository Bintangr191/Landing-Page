import Image from "next/image";
import images from "@/public/data";
import { LayoutContainer, Wrapper } from "../Template/Layout.Style";

function Pricing() {
  return (
    <LayoutContainer>
        <Wrapper>
            <Image src={images.pricing} alt="Pricing" />
        </Wrapper>
    </LayoutContainer>
  )
}

export default Pricing
