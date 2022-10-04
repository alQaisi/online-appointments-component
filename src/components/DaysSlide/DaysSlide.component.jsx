import { Container, DaysContainer, Day, Next, Previous } from "./DaysSlide.styles";
import { useWindowWidth } from "../../utils/useWindowSize";
import { useState, useEffect, useContext, Children } from "react";
import { ScheduleContext } from "../../context/Schedule.context";

function DaysSlide(){

    const { schedule, selectedDay, selectDay }=useContext(ScheduleContext);

    const width=useWindowWidth();
    const [divider,setDivider]=useState(5)
    const [currentDays,setCurrentDays]=useState(0);

    function Navigate(direction){
        const newCurrentDays=direction==="next"?currentDays+100:currentDays-100;
        setCurrentDays(newCurrentDays);
    }

    useEffect(()=>{
        const newDivider=( width || window.innerWidth )>410?5:3
        if(newDivider===divider)
            return ()=>{};
        const itemsNumber=(currentDays/100)*divider;
        const newCurrentDays=Math.round(itemsNumber/newDivider)*100;
        setDivider(newDivider);
        setCurrentDays(newCurrentDays);
        //eslint-disable-next-line
    },[width])

    if(!schedule)
        return <></>;
    
    const days=Children.toArray(schedule.map((item,index)=>{
        const {day,date}=item.availability;
        if(index===0)
            return <Day status="disabled" date={date.slice(0,2)}>{day.slice(0,3)}</Day>
        return <Day status={index===selectedDay?"selected":""} onClick={()=>selectDay(index)} date={date.slice(0,2)}>{day.slice(0,3)}</Day>
    }))

    return(
        <div className="wrapper">
            <Container>
                <DaysContainer  currentDays={currentDays}>
                    {days}
                </DaysContainer>
            </Container>
            <Next status={(currentDays===(Math.floor(schedule.length/divider)*100)?"unactive":undefined)} onClick={()=>Navigate("next")}/>
            <Previous status={currentDays===0?"unactive":undefined} onClick={Navigate}/>
        </div>
    );
}
export default DaysSlide