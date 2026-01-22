"use client";

import { useState } from "react";
import images from "@/public/data";
import Navbar from "@/src/Navbar/Navbar";
import LeftUp from "@/src/Left/LeftUp/LeftUp";
import LeftUp1 from "@/src/Left/LeftUp1/LeftUp1";
import LeftUp2 from "@/src/Left/LeftUp2/LeftUp2";
import Home1 from "@/src/Right/Home1/Home1";
import About from "@/src/Right/About/About";
import Pricing from "@/src/Right/Pricing/Pricing";
import LeftDown from "@/src/Left/LeftDown/LeftDown";
import {
  LeftColumn,
  RightColumn,
  Section,
  ContentWrapper,
  BackgroundImage,
  TopContent,
  BottomContent
} from "./page.style";

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
        return <LeftUp2 />;
      case 'faq':
        return <LeftUp2 />;
      default:
        return <LeftUp />;
    }
  };

  return (
    <>
      <Navbar onSectionChange={setActiveSection} />
      <ContentWrapper>
        <BackgroundImage
          src={images.background}
          alt="Navbar Background"
          fill
          priority
        />
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
