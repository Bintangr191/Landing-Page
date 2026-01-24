import Image from "next/image";
import { LeftupWrapper, LeftupContainer, Title, Button, Service, ServiceItem, IconWrapper, Icon, Icon1, BackgroundImage, ButtonContent} from "./LeftUp.style";
import { Mailbox } from 'lucide-react';
import images from "@/public/data";

function LeftUp() {
  return (
    <LeftupWrapper>
        <LeftupContainer>
            <Title>
            <h5>Mobile + Website Designer for <span>AI, Stocks, Crypto and Web3 Products.</span></h5>
            </Title>
            <Button>
            <button>
                <BackgroundImage src={images.background} alt="Navbar Background" fill priority/>
                <ButtonContent>
                    <Image src={images.people} alt="people"/>
                    <span>Start a project</span>
                    <Mailbox/>
                </ButtonContent>
            </button>
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
                    <Image src={images.logos.bibit} alt="Bibit" />
                </Icon>

                <Icon>
                    <Image  src={images.logos.stockbit} alt="Stockbit" />
                </Icon>

                <Icon>
                    <Image src={images.logos.univus} alt="Univus" />
                </Icon>

                <Icon>
                    <Image src={images.logos.regentech} alt="RegenTech" />
                </Icon>

                <Icon>
                    <Image src={images.logos.maskGroup} alt="iCHEF" />
                </Icon>

                <Icon>
                    <Image src={images.logos.yuro} alt="Yuro" />
                </Icon>

                <Icon>
                    <Image src={images.logos.akin} alt="akin" />
                </Icon>

                <Icon>
                    <Image src={images.logos.valdaze} alt="Validaze" />
                </Icon>

                <Icon>
                    <Image src={images.logos.kanu} alt="Kanu" />
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
