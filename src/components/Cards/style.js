import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
    width: 90%;
    height: 100px;

    background-color: #FFFFFF;
    border-radius: 5px;
    elevation: 6;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const ImagePerson = styled.Image`
    width: 80px;
    height: 80%;

    border-radius: 5px;
`
export const AppointmentTime = styled.View`
    width: 100px;
    height:26px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-color: #E8FCFD;
`

export const TimeTxt = styled.Text`
    color: #49B3BA;

    font-family: "Quicksand_600SemiBold";
    font-size: 14px;
`