import { FontAwesome } from '@expo/vector-icons'

import { DefaultText } from '../DefaultText/DefaultText'
import { Title } from '../Title/style'

import { AntDesign } from '@expo/vector-icons';


export const Cards = ({imageHeader, profileName}) => {
    return (
        <CardContainer>
            <ImagePerson/>
            <Container heightContainer={80}>

                <Container heightContainer={43}>
                    <Title fontSize={16}>Nome Pessoa</Title>
                    <DefaultText>20 anos . </DefaultText>
                </Container>

                <Container>
                    <AppointmentTime>
                        <AntDesign name="clockcircle" size={24} color="#49B3BA" />
                        <TimeTxt>15:00</TimeTxt>
                    </AppointmentTime>

                    <Links>Cancelar</Links>
                </Container>

            </Container>
        </CardContainer>
    )
}