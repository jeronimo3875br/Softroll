import styled from 'styled-components/native';
import { getStatusBarHeight } from '../../../utils/dimensions';

export const Container = styled.View`
    background-color: #212121;
    justify-content: center;
    margin-top: ${getStatusBarHeight};
`;

export const ProfileContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
`;