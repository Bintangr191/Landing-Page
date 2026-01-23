import Image from "next/image";
import DataImage from "@/public/data";
import { 
  LeftDownWrapper, 
  LeftDownContainer, 
  Section1, 
  Section2, 
  Section3 
} from "./LeftDown.Style";

function LeftDown() {
  return (
    <LeftDownWrapper>
      <LeftDownContainer>
        <Section1>
          <p>Wall of love from people ❤️</p>
        </Section1>
        
        <Section2>
          <p>
            Aan has excellent taste in visual design, his works will please your eyes at first sight.
          </p>
          <div>
            <Image src={DataImage.Imagecard} alt="Feri Ardi"/>
            <div>
              <p>Feri Ardi</p>
              <p>Head of Design Stockbit & Bibit</p>
            </div>
          </div>
        </Section2>
        
        <Section3>
          <Image src={DataImage.load} alt="load" />
        </Section3>
      </LeftDownContainer>     
    </LeftDownWrapper>
  )
}

export default LeftDown;