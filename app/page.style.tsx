import styled from "styled-components";
import Image from "next/image";

export const LeftColumn = styled.div`
  width: 400px;
  background-color: #252525;
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  flex-shrink: 0;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 844px) {
    width: 100%; 
    height: auto; 
    overflow-y: visible; 
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #252525;
  scroll-behavior: smooth;
  min-width: 0;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  
  scrollbar-width: none;

  @media (max-width: 844px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 844px) {
    padding: 0.5rem; 
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 70px);
  position: relative;
  overflow: hidden;
  overflow-x: hidden;

  @media (max-width: 844px) {
    flex-direction: column; 
    height: auto; 
    min-height: calc(100vh - 70px);
    overflow-y: auto; 
    
    /* Hide scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.4;
  mix-blend-mode: multiply;
  object-fit: cover;

  @media (max-width: 844px) {
    position: fixed; 
  }
`;

export const TopContent = styled.div`
  flex-shrink: 0;
`;

export const BottomContent = styled.div`
  flex-shrink: 0;
`;
