import styled from 'styled-components/native';

import { MotiView } from 'moti';

export const Container = styled(MotiView)``;

export const SearchButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #ad8f67;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    /* box-shadow: 0px 0px 10px #000000;
    elevation: 10; */
    transform: translateY(-25px);
    border: 5px solid #212121;
`;