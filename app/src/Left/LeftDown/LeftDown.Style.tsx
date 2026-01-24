import styled from "styled-components";
import Image from "next/image";

export const LeftDownWrapper = styled.div`
    width: 100%;
    padding: 0.8rem 2rem 0rem 2rem; 
    background: transparent;
`;

export const LeftDownContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

export const Section1 = styled.div`
    p {
        font-family: 'Switzer', sans-serif;
        font-size: 10px;
        font-weight: 100;
        color: #e0e0e0;
        margin: 0;
        text-align: center;
    }
`;

export const Section2 = styled.div`
  width: 87%;
  max-width: 500px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(42, 42, 42, 0.65) 0%,
    rgba(35, 35, 35, 0.5) 35%,
    rgba(28, 28, 28, 0.4) 70%,
    rgba(24, 24, 24, 0.25) 100%
  );
  
  padding: 0.8rem 1rem;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  
  p:first-child {
    font-size: 18px;
    line-height: 135%;
    color: rgba(255, 255, 255, 0.85);
    margin: 0 0 1rem 0;
    font-weight: 300;
    
    @media (max-width: 844px) {
      font-size: 16px;
      margin-bottom: 2rem;
    }
  }
  
  div {
    display: flex;
    align-items: left;
    gap: 1rem;
    
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
      flex-shrink: 0;
      cursor: pointer;

      @media (max-width: 844px) {
        width: 36px ;
        height: 36px ;
      }
    }
    
    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    
    p:first-of-type {
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.95);
      margin: 0;
      
      @media (max-width: 844px) {
        font-size: 16px;
      }
    }
    
    p:last-of-type {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.55);
      margin: 0;
      line-height: 0;
      
      @media (max-width: 844px) {
        font-size: 12px;
      }
    }
  }
  
  @media (max-width: 844px) {
    width: 90%;
    padding: 2rem 1.5rem;
  }
`;

export const TestimonialText = styled.p`
  font-size: 2rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 3rem;
  font-weight: 300;
  text-align: left;
  
  @media (max-width: 844px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const AuthorAvatar = styled(Image)`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  
  @media (max-width: 844px) {
    width: 56px;
    height: 56px;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const AuthorName = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  
  @media (max-width: 844px) {
    font-size: 1.25rem;
  }
`;

export const AuthorTitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 844px) {
    font-size: 0.9rem;
  }
`;

export const Section3 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: auto;
        height: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0.8;
        display: block;
`;