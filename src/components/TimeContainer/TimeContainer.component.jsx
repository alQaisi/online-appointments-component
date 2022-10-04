import { Container, Time } from "./TimeContainer.styles";
import { useContext, Children } from "react";
import { ScheduleContext } from "../../context/Schedule.context";

function TimeContainer(){
    const { currentDay, selectTime, selectedTime }=useContext(ScheduleContext);
    const {unavailable,available}=currentDay;

    function get12Hour(hour){
        const check=hour%12;
        if(check===0)
            return hour===24?'12:00 am':'12:00 pm';
        if(check===hour)
            return `${check}:00 am`;
        return `${check}:00 pm`;
        
    }

    function calculateTime(timesArray,availability){
        const [startTime,endTime]=Object.values(timesArray);
        const date=new Date(startTime*1000);
        const hour=date.getHours();

        const timeDifference = endTime - startTime;
        const differenceDate = new Date(timeDifference * 1000);
        const diffHours = differenceDate.getUTCHours();

        const times=[];

        for(let i=0;i<diffHours;i++){
            times[i]=get12Hour(hour+i);
        }
        return {startHour:hour,times,status:availability}
    }

    const availableHours=available.map(item=>calculateTime(item,"available"));
    const unavailableHours=unavailable.map(item=>calculateTime(item,"unavailable").times.map(time=>time)).flat();

    const TimesElements=Children.toArray(availableHours.map(item=>{
        return item.times.map(time=>{
            if(unavailableHours.includes(time))
                return<Time status="disabled">{time}</Time>
            if(time===selectedTime)
                return <Time status="selected">{time}</Time>
            return <Time  onClick={()=>selectTime(time)}>{time}</Time>
        })
    }));

    return(
        <Container>
            {TimesElements}
        </Container>
    );
}
export default TimeContainer;