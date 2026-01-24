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
      
      span:first-child {
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

export const Section1 = styled.div`
    margin-bottom: 2rem;

    p {
        font-family: 'Switzer', sans-serif;
        font-size: 28px;
        font-weight: 300;
        font-style: italic; 
        line-height: 120%;
        letter-spacing: 0%;
        margin: 0;
        color: #ffffff;
        background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @media (max-width: 844px) {
        margin-bottom: 1.5rem;

        p {
            font-size: 26px;
            line-height: 120%;
        }
    }
`;

export const Section2 = styled.div`
    margin-bottom: 1rem;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
            font-family: 'Switzer', sans-serif;
            font-size: 28px;
            font-weight: 300;
            font-style: normal;
            line-height: 120%;
            letter-spacing: 0%;
            color: #FFFFFF;
            padding-left: 0;
            position: relative;
            transition: all 0.3s ease;
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;

            svg {
                flex-shrink: 0;
                margin-top: 0.5rem; 
                color: #FFFFFF;
            }
        }
    }

    @media (max-width: 844px) {
        margin-bottom: 2rem;

        ul {
            gap: 0.875rem;

            li {
                font-size: 24px;
                gap: 0.65rem;

                svg {
                    margin-top: 0.5rem;
                }
            }
        }
    }
`;

export const Section3 = styled.div`
    margin-top: 1rem;

    p {
        font-family: 'Switzer', sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        margin: 0;
        color: #ffffff;
        text-decoration: underline;
        text-underline-offset: 4px; 
        text-decoration-thickness: 1px;
        transition: all 0.3s ease;
        cursor: pointer; 
        margin-left: 46px;

        &:hover {
            color: #a3a3a3;
            text-decoration-color: #a3a3a3; 
        }
    }

    @media (max-width: 844px) {
        margin-top: 1.25rem;
        text-align: center;

        p {
            font-size: 14px;
            text-underline-offset: 3px;
            margin-left: 0;
        }
    }
`;