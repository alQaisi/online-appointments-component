import styled from "styled-components";

import { StatusCheck } from "../DaysSlide/DaysSlide.styles";

export const Time=styled.span`
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.161);
    border-radius: 10px;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    padding: 9px;
    ${StatusCheck}
`

export const Container=styled.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:9px 15px;
    @media screen and (max-width:400px) {
        gap:9px 12px;
        ${Time}{
            padding:9px 0;
            font-size:.925rem;
        }
    }
`;