"use client";

import { useState } from "react";
import { SiLinkedin, SiX, SiDribbble, SiBehance } from "react-icons/si";
import { Sparkles, Circle, Menu, X as CloseIcon } from "lucide-react";
import { NavbarWrapper, BackgroundImage, NavbarContainer, NavbarBox, MenuLogo, MenuMonth, MonthDot, MonthText, MenuItems, SocialIcons, HamburgerButton, MobileMenu, MobileMenuItem,} from "./Navbar.Style";
import images from "@/public/data";

type NavbarProps = {
  onSectionChange?: (section: string) => void;
};

function Navbar({ onSectionChange }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    if (onSectionChange) {
      onSectionChange(section);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarWrapper>
        <BackgroundImage
          src={images.background}
          alt="Navbar Background"
          fill
          priority
        />
        <NavbarContainer>
          <NavbarBox>
            <MenuLogo>
              <h1>ARJ</h1>
            </MenuLogo>

            <MenuMonth>
              <MonthDot><Circle size={20} /></MonthDot>
              <MonthText>2 slot left this month</MonthText>
            </MenuMonth>

            <MenuItems>
              <li>
                <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleClick(e, 'pricing')}>Pricing</a>
              </li>
              <li>
                <a href="#template" onClick={(e) => handleClick(e, 'template')}>Template</a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleClick(e, 'faq')}>FAQ</a>
              </li>
            </MenuItems>

            <SocialIcons>
              <SiLinkedin size={20} />
              <SiX size={20} />
              <Sparkles size={20} />
              <SiDribbble size={20} />
              <SiBehance size={20} />
            </SocialIcons>

            <HamburgerButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
            </HamburgerButton>
          </NavbarBox>
        </NavbarContainer>
      </NavbarWrapper>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileMenuItem href="#projects" onClick={(e) => handleClick(e, 'projects')}>
          Projects
        </MobileMenuItem>
        <MobileMenuItem href="#about" onClick={(e) => handleClick(e, 'about')}>
          About
        </MobileMenuItem>
        <MobileMenuItem href="#pricing" onClick={(e) => handleClick(e, 'pricing')}>
          Pricing
        </MobileMenuItem>
        <MobileMenuItem href="#template" onClick={(e) => handleClick(e, 'template')}>
          Template
        </MobileMenuItem>
        <MobileMenuItem href="#faq" onClick={(e) => handleClick(e, 'faq')}>
          FAQ
        </MobileMenuItem>
      </MobileMenu>
    </>
  );
}

export default Navbar;