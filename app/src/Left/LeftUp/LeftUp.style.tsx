import styled from "styled-components";
import Image from "next/image";


export const LeftupWrapper = styled.section`
    width: 100%;
    height: auto; 
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
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 0;
    position: relative;
    z-index: 1;
    padding: 2rem 2rem 0 2rem; 
`;

export const Title = styled.div`
    h5 {
        font-family: 'Switzer', sans-serif;
        font-size: 1.9rem;
        font-weight: 700;
        line-height: 1;
        margin: 0;
        color: #858585;

        span {
        background: linear-gradient(135deg, #ffffff 0%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-style: Italic;
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

export const Service = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    margin-top: 0.2rem;
    width: 100%;
`;

export const ServiceItem = styled.div`
    padding: 0.4rem 0.75rem;
    border: 1.5px solid rgba(107, 114, 128, 0.4);
    border-radius: 4px;
    background: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    p {
        color: #9ca3af;
        font-size: 10px;
        font-weight: 400;
        margin: 0;
        font-family: 'Switzer', sans-serif;
        line-height: 1.2;
        white-space: nowrap;
    }

    &:hover {
        border-color: rgba(239, 68, 68, 0.6);
        background: rgba(239, 68, 68, 0.03);
        transform: translateY(-2px);
        
        p {
        color: #ef4444;
        }
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    flex-wrap: wrap;
    opacity: 0.6;
    `;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;

    img {
        height: 14px;
        width: auto;
        object-fit: contain;
        filter: grayscale(100%) brightness(0.8);
        transition: all 0.3s ease;
        border: none;
        outline: none;
        display: block;
    }

    &:hover {
        opacity: 1;
        
        img {
        filter: grayscale(0%) brightness(1);
        }
    }
`;

export const Icon1 = styled.div`
    padding: 0.1rem 0.6rem;
    border: 1.5px dashed rgba(107, 114, 128, 0.4);
    border-radius: 10px;
    background: transparent;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    p {
        color: #9ca3af;
        font-size: 10px;
        font-weight: 400;
        margin: 0;
        font-family: 'Switzer', sans-serif;
        line-height: 1.2;
        white-space: nowrap;
    }

    &:hover {
        border-color: rgba(239, 68, 68, 0.6);
        background: rgba(239, 68, 68, 0.03);
        transform: translateY(-2px);
        
        p {
        color: #ef4444;
        }
    }
`;

