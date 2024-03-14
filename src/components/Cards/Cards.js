import { FontAwesome } from '@expo/vector-icons'

import { DefaultText } from '../DefaultText/DefaultText'
import { Title } from '../Title/style'

export const Cards = ({imageHeader, profileName}) => {
    return (
        <CardContainer>
            <ImagePerson/>
            <Container>

                <Container>
                    <Title fontSize={16}>Nome Pessoa</Title>
                    <DefaultText>20 anos</DefaultText>
                </Container>

                <Container>

                </Container>

            </Container>
        </CardContainer>
    )
}