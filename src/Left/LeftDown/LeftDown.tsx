import Image from "next/image";
import DataImage from "@/public/data";
import { LeftDownWrapper, LeftDownContainer, Section1, Section2, Section3 } from "./LeftDown.Style";

function LeftDown() {
  return (
    <LeftDownWrapper>
        <LeftDownContainer>
            <Section1>
                <p>Wall of love from people ❤️</p>
            </Section1>
            <Section2>
                <Image src={DataImage.comment} alt="comment" />
            </Section2>
            <Section3>
                <Image src={DataImage.load} alt="load" />
            </Section3>
        </LeftDownContainer>     
    </LeftDownWrapper>
  )
}

export default LeftDown
