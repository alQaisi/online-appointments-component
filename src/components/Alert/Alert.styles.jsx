import styled from "styled-components";

export const Element=styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2rem;
    text-align: center;
    padding:25px;
    border-radius: 14px;
`

export const Container=styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px 0;
    z-index: 100;
`;