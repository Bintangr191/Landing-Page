import Image from "next/image";
import { LeftupWrapper, LeftupContainer, Title, Button, Description, BackgroundImage, ButtonContent} from "./LeftUp1.Style";
import { Mailbox } from 'lucide-react';
import images from "@/public/data";

function LeftUp1() {
  return (
    <LeftupWrapper id="1" >
        <LeftupContainer>
            <Title>
            <p>I began my design journey as a freelance graphic and icon designer in 2017, and now Sr. Product Designer at 🦄  Fintech Startup.</p>
            </Title>
            <Description>
            <p>I work mostly in the finance, crypto, stocks, and web3 industries. For me, design isn’t just about looking good — it’s about creating meaningful impact for users.</p>
            </Description>
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
        </LeftupContainer>
      
    </LeftupWrapper>
  )
}

export default LeftUp1
