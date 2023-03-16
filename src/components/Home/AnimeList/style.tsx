import styled from 'styled-components/native';
import { MotiScrollView } from 'moti';

export const Container = styled(MotiScrollView)`
    padding: 20px;
    padding-left: 15px;
    padding-right: 0;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
`;

export const Title = styled.Text`
    font-size: 15px;
    color: #ffffff;
    text-transform: uppercase;
`;

export const Operation = styled.TouchableOpacity``;

export const OperationText = styled.Text`
    font-size: 15px;
    color: #3f3e37;
    margin-right: 10px;
`;

export const Main = styled.FlatList``;