import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: #161616;
  backdrop-filter: blur(10px);
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #2a2a2a;
  border: 2px solid #404040; 
  border-radius: 4px; 
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;