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

export const Title = styled.div`
    margin-bottom: 1.2rem;
    
    p {
        font-family: 'Switzer', sans-serif;
        font-size: 20px;
        font-weight: 200;
        line-height: 1.5;
        margin: 0;
        color: #aaaaaa;
    }
`;

export const Description = styled.div`
    margin-bottom: 1.5rem;
    
    p {
        font-family: 'Switzer', sans-serif;
        font-size: 17.5px;
        font-weight: 200;
        line-height: 1.5;
        margin: 0;
        color: #737373;
    }
`;

export const Button = styled.div`
    margin-bottom: 0;
    
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        
        /* Avatar styling */
        img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        object-fit: cover;
        }

        /* Text styling */
        span {
        font-family: 'Switzer', sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
        color: #1a1a1a;
        white-space: nowrap;
        }

        /* Icon styling */
        svg {
        width: 16px;
        height: 16px;
        color: #1a1a1a;
        }

        /* Button styling */
        border: none;
        border-radius: 50px;
        background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 100%);
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px rgba(0, 0, 0, 0.1);

        &:hover {
        background: linear-gradient(135deg, #4ab5e0 0%, #3498d6 100%);
        transform: translateY(-1px);
        box-shadow: 0 6px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 844px) {
            width: 100%; 
            padding: 0.65rem 1.rem; 
            gap: 1rem;
            
            img {
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