import styled,{ css } from "styled-components";

const h2Styles=css`
    position: relative;
    font-size: 1.13rem;
    font-weight: 800;
`;

export const SectionTitle=styled.h2`
    ${h2Styles}
`;

export const Divider=styled.hr`
    margin:18px 0 16.5px;
    border: none;
    height: 1px;
    background-color: #E1E1E1;
`;

export const CardHeader=styled.h2`
    ${h2Styles};
    &::after{
        content:"85$";
        position: absolute;
        right: 0;
        opacity: 0.5;
        font-weight: 400;
    }
`;

export const CardContainer=styled.div`
    width: 100%;
    max-width: 357px;
    padding: 26px 40px;
    margin:30px auto 0;
    background: #FFFFFF;
    border: 1px solid #E1E1E1;
    border-radius: 10px;
    position: relative;
    &::before{
        content: "Schedule Appointment";
        position: absolute;
        top:-50px;
        left:0px;
        font-size:1.67rem;
        line-height: 2rem;
        font-weight: 700;
    }
    @media screen and (max-width:410px) {
        padding: 23px 25px;
    }
`;