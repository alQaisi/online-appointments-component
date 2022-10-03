import { Container, Time } from "./TimeContainer.styles";
function TimeContainer(){
    return(
        <Container>
            <Time>9:00 am</Time>
            <Time>10:00 am</Time>
            <Time>11:00 am</Time>
            <Time status="disabled">12:00 pm</Time>
            <Time>1:00 pm</Time>
        </Container>
    );
}
export default TimeContainer;