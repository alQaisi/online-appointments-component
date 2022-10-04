import DaysSlide from "../DaysSlide/DaysSlide.component";
import TimeContainer from "../TimeContainer/TimeContainer.component";
import Alert from "../Alert/Alert.component";
import { CardContainer,CardHeader,Divider,SectionTitle } from "./card.styles";
import { ScheduleContext } from "../../context/Schedule.context";
import { useContext } from "react";

function Card(){
    const { schedule, isAlert, toggleAlert, selectedTime, selectedDay }=useContext(ScheduleContext);
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
           <button className={selectedTime?"active":""} onClick={()=>toggleAlert(true)}>Book Appointment</button>
           { isAlert && <Alert day={schedule[selectedDay]} time={selectedTime} /> }
        </>
    );
}
export default Card;