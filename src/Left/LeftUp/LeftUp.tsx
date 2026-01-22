import Image from "next/image";
import DataImage from "@/public/data";
import { LeftupWrapper, LeftupContainer, Title, Button, Service, ServiceItem, IconWrapper, Icon, Icon1} from "./LeftUp.style";
import { Mailbox } from 'lucide-react';

function LeftUp() {
  return (
    <LeftupWrapper>
        <LeftupContainer>
            <Title>
            <h5>Mobile + Website Designer for <span>AI, Stocks, Crypto and Web3 Products.</span></h5>
            </Title>
            <Button>
                <button><Image src={DataImage.people} alt="people" height={24} />Start a project<Mailbox size={32} /></button>
            </Button>
            <Service>
                  <ServiceItem>
                        <p>Mobile App Design</p>
                    </ServiceItem>
                    <ServiceItem>
                        <p>UI/UX Design</p>
                    </ServiceItem>
                    <ServiceItem>
                        <p>Brand Identity</p>
                    </ServiceItem>
                    <ServiceItem>
                        <p>Framer Development</p>
                    </ServiceItem>
                    <ServiceItem>
                        <p>Icon Design</p>
                    </ServiceItem>
                    <ServiceItem>
                        <p>Product Design</p>
                    </ServiceItem>
            </Service>
            <IconWrapper>
                <Icon>
                    <Image src={DataImage.logos.bibit} alt="Bibit" />
                </Icon>

                <Icon>
                    <Image  src={DataImage.logos.stockbit} alt="Stockbit" />
                </Icon>

                <Icon>
                    <Image src={DataImage.logos.univus} alt="Univus" />
                </Icon>

                <Icon>
                    <Image src={DataImage.logos.regentech} alt="RegenTech" />
                </Icon>

                <Icon>
                    <Image src={DataImage.logos.maskGroup} alt="iCHEF" />
                </Icon>

                <Icon>
                    <Image src={DataImage.logos.yuro} alt="Yuro" />
                </Icon>

                <Icon>
                    <Image src={DataImage.logos.valdaze} alt="Validaze" />
                </Icon>

                <Icon>
                    <Image src={DataImage.logos.kanu} alt="Kanu" />
                </Icon>

                <Icon1>
                        <p>20+ more</p>
                </Icon1>
            </IconWrapper>
        </LeftupContainer>
      
    </LeftupWrapper>
  )
}

export default LeftUp
