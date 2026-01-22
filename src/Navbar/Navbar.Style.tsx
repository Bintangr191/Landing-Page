import styled from "styled-components";
import NextImage from "next/image";

export const NavbarWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: #252525;
  border-bottom: 1px solid #3a3a3a;
  overflow: visible;
  height: 70px;
  margin: 0;
  margin-bottom: 0;
`;

export const BackgroundImage = styled(NextImage)`
  opacity: 0.5;
  mix-blend-mode: multiply;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  color: #f5f5f5;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 844px) {
    padding: 1rem 1.5rem;
  }
`;

export const NavbarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  height: 100%;

  @media (max-width: 844px) {
    gap: 1rem;
  }
`;

export const MenuLogo = styled.div`
  flex-shrink: 0;

  h1 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    font-family: 'Switzer', sans-serif;
    letter-spacing: -0.5px;
  }
`;

export const MenuMonth = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  white-space: nowrap;
  padding: 0.4rem 0.4rem;
  border: 1px solid #4a4a4a;
  border-radius: 20px;
  background: rgba(60, 60, 60, 0.5);
  backdrop-filter: blur(8px);

  @media (max-width: 844px) {
    padding: 0.3rem 0.5rem; /* sedikit lebih kecil */
  }
`;

export const MonthDot = styled.span`
  display: flex;
  align-items: center;
  color: #4fc3f7;
  animation: pulse 2s infinite;
  
  svg {
    width: 10px;
    height: 10px;
    fill: #4fc3f7; 
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
`;

export const MonthText = styled.span`
  font-size: 12px;
  color: #e0e0e0;
  font-weight: 500;
  letter-spacing: 0.2px;
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 5.5rem;
  gap: 20px;
  flex: 1;
  justify-content: left;

  li {
    a {
      text-decoration: none;
      color: #8b8b8b;
      font-size: 15px;
      transition: color 0.3s ease;

      &:hover {
        color: #f5f5f5;
      }
    }
  }

  @media (max-width: 844px) {
    display: none;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  flex-shrink: 0;

  svg {
    cursor: pointer;
    color: #8b8b8b;
    transition: color 0.3s ease;

    &:hover {
      color: #f5f5f5;         
    }
  }

  @media (max-width: 844px) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #f5f5f5;
  flex-shrink: 0;

  @media (max-width: 844px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 844px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 71px;
    left: 0;
    right: 0;
    background: #252525;
    border-top: none;
    border-bottom: 1px solid #3a3a3a;
    flex-direction: column;
    padding: 1.5rem 2rem ;
    gap: 1.5rem;
    z-index: 1000; /* naikin dari 999 */
    overflow-y: auto;
    margin-top: -1px;

    /* Hide scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const MobileMenuItem = styled.a`
  text-decoration: none;
  color: #b0b0b0;
  font-size: 1.25rem;
  font-weight: 400;
  font-family: 'Switzer', sans-serif;
  transition: color 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    color: #f5f5f5;
  }
`;
