import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    background-color: #212121;
`;

export const Content = styled(MotiView)`
    flex: 1;
    height: 50%;
    background-color: #212121;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #ad8f67;
`;

export const SubTitle = styled.Text`
    text-align: center;
    font-size: 17px;
    color: #f3f3f3;
`;


export const CreateAccountLink = styled.TouchableOpacity`
    align-self: center;
`;

export const CreateAccountLinkText = styled.Text`
    color: #f3f3f3;
    font-size: 17px;
`;

export const CreateAccountLinkTextDetail = styled.Text`
    color: #ad8f67;
`;