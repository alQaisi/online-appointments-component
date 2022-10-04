import { createContext, useState, useEffect } from "react";

export const ScheduleContext=createContext({});

export function ScheduleProvider({children}){

    const [schedule,setSchedule]=useState(undefined);
    const [selectedDay,selectDay]=useState(1);
    const [selectedTime,selectTime]=useState(undefined);
    const [isAlert,toggleAlert]=useState(false);

    const currentDay=schedule && schedule[selectedDay];

    useEffect(()=>{
        fetch("https://cura-front-end-test.herokuapp.com/")
            .then(res=>res.json())
            .then(JSON.parse)
            .then(res=>setSchedule(res.schedule))
            .catch(err=>alert("Please Try Again Later !"));
    },[]);

    useEffect(()=>{
        selectTime(undefined);
    },[selectedDay])

    const value={ schedule, selectedDay, selectDay, currentDay, selectTime, selectedTime, isAlert, toggleAlert };
    return(
        <ScheduleContext.Provider value={value}>{children}</ScheduleContext.Provider>
    );
}