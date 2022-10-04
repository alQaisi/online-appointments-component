import styled,{ css } from "styled-components";
import { FcNext, FcPrevious } from "react-icons/fc";

export const StatusCheck=css`
    ${(props)=>{
        switch(props.status){
            case "disabled":
                return css`
                    box-shadow: unset;
                    pointer-events: none;
                    color: #CFCFCF;
                `
            case "selected":
                return css`
                    color: #FFF;
                    box-shadow: unset;
                    background: #4894FE;
                `
            default:
                return css`
                    cursor: pointer;
                    :hover{
                        filter: brightness(93%);
                    }
                `;
        }
    }}`;

const unactiveArrow=css`
    pointer-events: none;
    opacity:.55;
`;
const arrowStyles=css`
    &>*{
        fill:#D8D8D8;
    }
    position:absolute;
    top:50%;
    font-size:1.65rem;
    z-index: 100;
    transform: translateY(-50%);
    &:hover{
        cursor: pointer;
        filter: brightness(90%);
    }
    ${(props)=>props.status && unactiveArrow};
`;

export const Next=styled(FcNext)`
    ${arrowStyles};
    right:-25px;
`;

export const Previous=styled(FcPrevious)`
    ${arrowStyles};
    left:-25px;
`;

export const Day=styled.span`
    font-size:.933rem;
    font-weight: 800;
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.161);
    border-radius: 9px;
    padding: 9px 8px;
    min-width: 16.5%;
    text-align: center;
    ${StatusCheck}
    &::after{
        display: block;
        content:"${props=>props.date}";
        font-size: 1.2rem;
        font-weight: 400;
        margin-top: 5px;
    }
    @media screen and (max-width:410px) {
        min-width: 27.25%;
    }
`

export const DaysContainer=styled.div`
    max-width: 100%;
    padding: 5px 4px;
    display: flex;
    gap: 0 11px;
    transform:translateX(-${props=>props.currentDays}%);
    transition: all .75s ease-in-out;
    @media screen and (max-width:410px) {
        gap: 0 7%;
        padding: 5px 3px;
    }
`;

export const Container=styled.div`
    width: 100%;
    overflow: hidden;
    margin: 12px 0 16px;
    position: relative;
`;