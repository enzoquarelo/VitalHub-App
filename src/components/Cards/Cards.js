import { DefaultText } from '../DefaultText/DefaultText'
import { Title } from '../Title/style'
import { Container } from '../Container/style';
import { Links } from '../Links/style'
import { CardContainer, ImagePerson, AppointmentTime, TimeTxt } from './style';

import { AntDesign } from '@expo/vector-icons';


export const Cards = ({imageHeader, profileName}) => {
    return (
        <CardContainer>
            <ImagePerson source={require('../../../assets/images/doctorImage_temp.png')}/>
            <Container widthContainer={'65%'} heightContainer={80}>

                <Container 
                    heightContainer={43}
                    alignItems={'start'}
                >
                    <Title fontSize={16}>Nome Pessoa</Title>
                    <DefaultText textAlign={'start'}>20 anos . Urgência</DefaultText>
                </Container>

                <Container heightContainer={30} flexDirection={'row'} justifyContent={'space-between'} style={{marginTop: 8}}>
                    <AppointmentTime>
                        <AntDesign name="clockcircle" size={16} color="#49B3BA" style={{paddingTop: 2}}/>
                        <TimeTxt>15:00</TimeTxt>
                    </AppointmentTime>

                    <Links colorLink={'#C81D25'} fontSize={14} underline={true} widthLink={40}>Cancelar</Links>
                </Container>

            </Container>
        </CardContainer>
    )
}