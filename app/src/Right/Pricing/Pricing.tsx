import Image from "next/image";
import DataImage from "@/public/data";
import { LayoutContainer, Wrapper } from "../Template/Layout.Style";

function Pricing() {
  return (
    <LayoutContainer>
        <Wrapper>
            <Image src={DataImage.pricing} alt="Pricing" />
        </Wrapper>
    </LayoutContainer>
  )
}

export default Pricing
