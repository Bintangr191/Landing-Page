import styled from "styled-components";
import Image from "next/image";

export const LeftupWrapper = styled.section`
    width: 100%;
    background: linear-gradient(110deg,#1a1a1a 0%, #1f1f1f 40%, #252525 100%);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    z-index: 10;
    padding: 0;
    margin: 0;
    overflow: hidden;
    min-height: 358px;
`;

export const LeftupContainer = styled.div`
    width: 100%;
    height: 365px;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0;
    position: relative;
    z-index: 1;
    padding: 0.8rem 2rem 1rem 2rem; 

    @media (max-width: 844px) {
        height: auto; 
        min-height: 358px; 
        padding: 1rem 1.5rem; 
        gap: 12px; 
    }
`;

export const Title = styled.div`
    margin-bottom: 1.2rem;
    
    p {
        font-family: 'Switzer', sans-serif;
        font-size: 22px;
        font-weight: 300;
        line-height: 105%;
        margin: 0;
        color: #aaaaaa;

        @media (max-width: 844px) {
            font-size: 28px;
            line-height: 120%;
        }
    }
`;

export const Description = styled.div`
    margin-bottom: 1.5rem;
    
    p {
        font-family: 'Switzer', sans-serif;
        font-size: 22px;
        font-weight: 300;
        line-height: 105%;
        margin: 0;
        color: #737373;

          @media (max-width: 844px) {
            font-size: 28px;
            line-height: 120%;
        }
    }
`;

export const ButtonContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 844px) {
    gap: 1rem;
  }
`;

export const Button = styled.div`
  button {
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.375rem 0.8rem;
    overflow: hidden;
    
    border: none;
    border-radius: 50px;
    background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 100%);
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px rgba(0, 0, 0, 0.1);

    span:first-child {
      position: absolute !important;
      inset: 0;
      z-index: 0;
      opacity: 0.3; 
      mix-blend-mode: overlay; 
    }

    img:not([alt="Navbar Background"]) {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      font-family: 'Switzer', sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      color: #1a1a1a;
      white-space: nowrap;
      transition: color 0.3s ease;
    }

    svg {
      width: 18px;
      height: 18px;
      color: #1a1a1a;
      transition: color 0.3s ease;
    }

    &:hover {
      background: linear-gradient(135deg, #4ab5e0 0%, #3498d6 100%);
      border-color: rgba(255, 255, 255, 0.8);
      
      > span:first-child {
        opacity: 0.2;
      }

      span {
        color: #ffffff;
      }

      svg {
        color: #ffffff;
      }
    }

    @media (max-width: 844px) {
      width: 100%; 
      padding: 0.65rem 1rem; 
      gap: 1rem;
          
      img:not([alt="Navbar Background"]) {
        width: 32px;
        height: 32px;
      }        
      
      span {
        font-size: 0.95rem;
      }  
      
      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const BackgroundImage = styled(Image)`
  opacity: 0.5;
  mix-blend-mode: multiply;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: 0;
`;