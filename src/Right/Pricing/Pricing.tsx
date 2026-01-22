import Image from "next/image";
import DataImage from "@/public/data";
import { PricingContainer, Pricing1 } from "./Pricing.Style";

function Pricing() {
  return (
    <PricingContainer>
        <Pricing1>
            <Image src={DataImage.pricing} alt="Pricing" />
        </Pricing1>
    </PricingContainer>
  )
}

export default Pricing
