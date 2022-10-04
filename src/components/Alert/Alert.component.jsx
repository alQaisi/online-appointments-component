import { Container,Element } from "./Alert.styles";

function Alert({day,time}){
    const dayString=day?.availability?.label;
    console.log(day)
    return(
        <Container>
            <Element>You appointment has been set to {dayString} at {time}</Element>
            <button className="active" onClick={()=>window.location.reload(false)}>OK</button>
        </Container>
    );
}
export default Alert;