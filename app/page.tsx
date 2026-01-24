"use client";

import { useState } from "react";
import images from "@/public/data";
import Navbar from "@/app/src/Navbar/Navbar";
import LeftUp from "@/app/src/Left/LeftUp/LeftUp";
import LeftUp1 from "@/app/src/Left/LeftUp1/LeftUp1";
import LeftUp2 from "@/app/src/Left/LeftUp2/LeftUp2";
import Home1 from "@/app/src/Right/Home1/Home1";
import About from "@/app/src/Right/About/About";
import Pricing from "@/app/src/Right/Pricing/Pricing";
import LeftDown from "@/app/src/Left/LeftDown/LeftDown";
import {LeftColumn, RightColumn, Section, ContentWrapper, BackgroundImage, TopContent,BottomContent} from "./page.style";
import LeftUp3 from "./src/Left/LeftUp3/LeftUp3";

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');

  const renderTopContent = () => {
    switch(activeSection) {
      case 'projects':
        return <LeftUp />;
      case 'about':
        return <LeftUp1 />;
      case 'pricing':
        return <LeftUp2 />;
      case 'template':
        return <LeftUp3 />;
      case 'faq':
        return <LeftUp3 />;
      default:
        return <LeftUp />;
    }
  };

  return (
    <>
      <Navbar onSectionChange={setActiveSection} />
      <ContentWrapper>
        <BackgroundImage src={images.background} alt="Navbar Background" fill priority/>
        <LeftColumn>
          <TopContent>
            {renderTopContent()}
          </TopContent>
          <BottomContent>
            <LeftDown />
          </BottomContent>
        </LeftColumn>

        <RightColumn>
          <Section>
            <Home1 />
          </Section>
          
          <Section>
            <About />
          </Section>

          <Section>
            <Pricing />
          </Section>
        </RightColumn>
      </ContentWrapper>
    </>
  );
}
