import DaysSlide from "../DaysSlide/DaysSlide.component";
import TimeContainer from "../TimeContainer/TimeContainer.component";
import { CardContainer,CardHeader,Divider,SectionTitle } from "./card.styles";
import { ScheduleContext } from "../../context/Schedule.context";
import { useContext } from "react";

function Card(){
    const { schedule }=useContext(ScheduleContext);
    if(!schedule)
        return <h1>Loading...</h1>
    return(
        <>
            <CardContainer>
                <CardHeader>Fees</CardHeader>
                <Divider/>
                <SectionTitle>Schedule</SectionTitle>
                <DaysSlide/>
                <SectionTitle>Choose time</SectionTitle>
                <TimeContainer/>
            </CardContainer>
            <button>Book Appointment</button>
        </>
    );
}
export default Card;