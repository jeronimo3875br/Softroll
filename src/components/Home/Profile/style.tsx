import styled from 'styled-components/native';
import { MotiImage } from 'moti';

export const ProfileContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ProfileImage = styled(MotiImage)`
    width: 52px;
    height: 52px;
    margin-right: 10px;
    border-radius: 50px;
    border: 1.5px solid #ad8f67;
`;

export const ProfileImageButton = styled.TouchableOpacity``;

export const ProfileDefaultMessage = styled.Text`
    color: #ad8f67;
    font-size: 17px;
`;

export const ProfileAccountName = styled.Text`
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
`;

export const ProfileAccount = styled.View``;