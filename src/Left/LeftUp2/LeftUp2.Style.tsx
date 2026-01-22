import styled from "styled-components";

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
    padding: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 0;
    position: relative;
    z-index: 1;
`;
