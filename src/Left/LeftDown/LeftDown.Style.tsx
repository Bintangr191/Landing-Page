import styled from "styled-components";

export const LeftDownWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    background: transparent;
`;

export const LeftDownContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    width: 60%;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.03);
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    img {
        width: 100%;
        height: auto;
        object-fit: contain;
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