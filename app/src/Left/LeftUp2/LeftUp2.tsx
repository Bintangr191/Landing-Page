import { LeftupWrapper, LeftupContainer, ButtonContent, BackgroundImage, Button, Section1, Section2, Section3} from "./LeftUp2.Style";
import { Mailbox, Circle } from 'lucide-react';
import images from "@/public/data";
import Image from "next/image";

function LeftUp2() {
  return (
        <LeftupWrapper id="2" >
            <LeftupContainer>
              <Section1>
                <p>Simple pricing for you.</p>
              </Section1>
              <Section2>
                <ul>
                  <li><Circle size={10} fill="currentColor" />$1.000 for landing page</li>
                  <li><Circle size={10} fill="currentColor" />$2.000 for up to 7 page</li>
                  <li><Circle size={10} fill="currentColor" />Start $4.000 for end to end app design</li>
                </ul>
              </Section2>
              <Button>
                <button>
                    <BackgroundImage src={images.background} alt="Navbar Background" fill priority/>
                    <ButtonContent>
                    <Image src={images.people} alt="people" width={32} height={32} />
                    <span>Start a project</span>
                    <Mailbox size={18} />
                    </ButtonContent>
                </button>
              </Button>
              <Section3>
                <p>or say hi to me</p>
              </Section3>
            </LeftupContainer>         
        </LeftupWrapper>
  )
}

export default LeftUp2
