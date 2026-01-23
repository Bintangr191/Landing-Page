import Image from "next/image";
import DataImage from "@/public/data";
import { LeftupWrapper, LeftupContainer, Title, Button, Description} from "./LeftUp1.Style";
import { Mailbox } from 'lucide-react';

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
                <button><Image src={DataImage.people} alt="people" height={24} /><span>Start a project</span><Mailbox size={32} /></button>
            </Button>
        </LeftupContainer>
      
    </LeftupWrapper>
  )
}

export default LeftUp1
