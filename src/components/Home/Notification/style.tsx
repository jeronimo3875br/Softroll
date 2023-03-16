import styled from 'styled-components/native';
import { MotiView } from 'moti';

export const AccountNotifications = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const NotificationValue = styled(MotiView)`
    width: 21px;
    height: 21px;
    background-color: #ad8f67;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    z-index: 1;
    flex-shrink: 0;
    transform: translateX(10px) translateY(20px);
`;

export const NotificationValueText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #ffffff;
`;